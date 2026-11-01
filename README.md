# Sudipto Das — Portfolio Website + Online Admin CMS

Modern, responsive Next.js portfolio with 3 verified GitHub projects and a password-protected Supabase-powered content editor. The public site can be previewed without a database; permanent online editing requires Supabase.

## Included

- Homepage: custom dark/light responsive design, original professional photo, About, Featured Projects, Skills, Services, Education and Contact.
- Three real projects: Mehedi By Meherin (Next.js/Supabase), Quizora (Laravel/React/Groq AI), Bangladesh Single Society (React/Vite).
- Admin editor at `/admin`: edit profile, projects, images, skills, services, education, social links, and optional CV upload.
- Supabase Auth + RLS allowlist, Supabase Storage for photos/PDFs; no local server needed **after deployment**.
- Works in preview mode with bundled profile content until Supabase is configured.

## Local development (Windows PowerShell)

Requirement: Node.js 20.9+ (Node 22 or 24 recommended).

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000 . Before Supabase configuration, this shows the bundled preview. The `/admin` route explains what is missing.

## Set up online editing (Supabase)

1. Create a Supabase project at https://supabase.com/dashboard .
2. Open SQL Editor and run `sql/01-schema.sql`, followed by `sql/02-seed-content.sql`.
3. Authentication > Providers > Email: enable Email login. For a private admin, disable public signup if feasible.
4. Authentication > Users > Add user: create **your own** email/password account. Do not put a password into project files or chat messages.
5. Copy that user's `id` (UUID) from Supabase Auth Users. In SQL Editor run this, substituting your own UUID:

```sql
insert into public.portfolio_admins(user_id)
values ('REPLACE-WITH-AUTH-USER-UUID')
on conflict (user_id) do nothing;
```

6. Project Settings > API Keys (or Connect): copy Project URL and **publishable** key (legacy anon key works). Do **not** use the service_role or secret key in the browser.
7. Fill `.env.local` locally, but **never commit that file**:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLISHABLE_OR_ANON_KEY
```

8. Restart local `npm run dev`. Open http://localhost:3000/admin, sign in as your approved user. Edit any text and click `Save & Publish`.
9. Note: The SQL seed insert uses `on conflict do nothing`, so running it again does not overwrite edits.

Optional live content synchronization: in Supabase Database > Publications, add `public.portfolio_content` to `supabase_realtime`. Without Realtime, visitors can see changes on refresh.

## Publish on Vercel

1. Create **a new separate GitHub repository** for the portfolio; do not upload it into any of the 3 project repositories.
2. Push this project's source files to the new repository (do not push `.env.local`).
3. Visit https://vercel.com/new and import the portfolio repository. Vercel detects Next.js.
4. In Vercel Environment Variables, set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the same values as in `.env.local`.
5. Deploy. Use `https://YOUR-DEPLOYMENT.vercel.app/admin` to edit from any device. You no longer need your computer's local server running to publish content edits.
6. If using Supabase custom auth redirect URLs later, configure Site URL and Redirect URLs in Supabase Auth settings.

### Security notes

- Authenticated users are **not** administrators by default: their UUID must be manually added to `portfolio_admins`.
- RLS checks admin status server-side before allowing updates and media uploads.
- Passwords remain in Supabase Auth; they are never stored inside this app's source code.
- Only public project data and a public photo are displayed. Do not upload private customer data to the portfolio.
- Photo/PDF files uploaded to the `portfolio-media` bucket are public, by design. Do not upload sensitive documents.
- Image and PDF upload is restricted to 5 MB. The CMS currently exposes direct file URL upload fields and basic CRUD; it is not a full blog builder.

## Verification checklist

- [ ] Mobile, tablet, desktop layout
- [ ] Light/dark theme and mobile menu
- [ ] All three projects have correct GitHub URLs
- [ ] Admin login works only for allowlisted UUID
- [ ] Admin edits saved and visible after public page refresh
- [ ] New project creation and removal
- [ ] Photo upload and CV upload
- [ ] Project link URLs and social URLs
- [ ] Test production deployment and Vercel environment variables

## Content caveats

Repository details were checked Nov 1, 2026. The Mehedi repository is public at the time of verification. Its live URL in the starter uses the previously shared domain and was not independently verified as reachable in this session. The Quizora live link comes from its project README. Singlesociety's README is still the standard Vite starter; its behavior was confirmed by reading `src/App.jsx`, and no live URL was identified. Hero text, project dates and role wording can be adjusted through the admin UI.
