-- Supabase SQL Editor: run once BEFORE the seed migration.
-- Publishable content is readable by everyone; only explicitly approved admins can edit.
create table if not exists public.portfolio_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
create table if not exists public.portfolio_content (
  id integer primary key check (id = 1),
  data jsonb not null check (jsonb_typeof(data) = 'object'),
  updated_at timestamptz not null default now()
);
alter table public.portfolio_admins enable row level security;
alter table public.portfolio_content enable row level security;

-- SECURITY DEFINER avoids RLS recursion. Search path fixed.
create or replace function public.is_portfolio_admin(uid uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.portfolio_admins where user_id = uid);
$$;
revoke all on function public.is_portfolio_admin(uuid) from public;
grant execute on function public.is_portfolio_admin(uuid) to authenticated;

revoke all on public.portfolio_admins from anon;
grant select on public.portfolio_admins to authenticated;
grant select on public.portfolio_content to anon, authenticated;
grant insert, update, delete on public.portfolio_content to authenticated;

-- Idempotent policies.
drop policy if exists "admin can see own membership" on public.portfolio_admins;
create policy "admin can see own membership" on public.portfolio_admins for select to authenticated using (user_id = auth.uid());
drop policy if exists "public reads portfolio" on public.portfolio_content;
create policy "public reads portfolio" on public.portfolio_content for select to anon, authenticated using (true);
drop policy if exists "admin inserts portfolio" on public.portfolio_content;
create policy "admin inserts portfolio" on public.portfolio_content for insert to authenticated with check (public.is_portfolio_admin(auth.uid()));
drop policy if exists "admin updates portfolio" on public.portfolio_content;
create policy "admin updates portfolio" on public.portfolio_content for update to authenticated using (public.is_portfolio_admin(auth.uid())) with check (public.is_portfolio_admin(auth.uid()));
drop policy if exists "admin deletes portfolio" on public.portfolio_content;
create policy "admin deletes portfolio" on public.portfolio_content for delete to authenticated using (public.is_portfolio_admin(auth.uid()));

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('portfolio-media','portfolio-media',true,5242880,array['image/jpeg','image/png','image/webp','image/gif','application/pdf'])
on conflict (id) do update set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
drop policy if exists "public view portfolio media" on storage.objects;
create policy "public view portfolio media" on storage.objects for select to anon,authenticated using(bucket_id='portfolio-media');
drop policy if exists "admins upload portfolio media" on storage.objects;
create policy "admins upload portfolio media" on storage.objects for insert to authenticated with check(bucket_id='portfolio-media' and public.is_portfolio_admin(auth.uid()));
drop policy if exists "admins update portfolio media" on storage.objects;
create policy "admins update portfolio media" on storage.objects for update to authenticated using(bucket_id='portfolio-media' and public.is_portfolio_admin(auth.uid())) with check(bucket_id='portfolio-media' and public.is_portfolio_admin(auth.uid()));
drop policy if exists "admins remove portfolio media" on storage.objects;
create policy "admins remove portfolio media" on storage.objects for delete to authenticated using(bucket_id='portfolio-media' and public.is_portfolio_admin(auth.uid()));

-- In Supabase Dashboard > Database > Publications > supabase_realtime,
-- optionally enable portfolio_content for immediate cross-tab refresh.
