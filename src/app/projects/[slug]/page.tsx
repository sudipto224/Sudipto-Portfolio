import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjects } from '@/data/portfolio';

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.name} | Sudipto Das`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.description,
      type: 'website',
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const all = getAllProjects();
  const currentIndex = all.findIndex((p) => p.slug === project.slug);
  const nextProject = all[(currentIndex + 1) % all.length];

  return (
    <article className="project-page">
      <section className="project-hero">
        <div className="container project-hero-inner">
          <div className="project-hero-badge">{project.category}</div>
          <h1 className="project-hero-title">{project.name}</h1>
          <p className="project-hero-intro">{project.description}</p>
          <div className="project-hero-meta">
            <span>{project.role}</span>
            <span>{project.period}</span>
          </div>
        </div>
        <div className="project-hero-image">
          <img src={project.image} alt={`${project.name} screenshot`} />
        </div>
      </section>

      <section className="section project-body">
        <div className="container project-grid">
          <div className="project-overview">
            <h2 className="heading-md">Overview</h2>
            <p className="project-text">{project.overview}</p>
          </div>
          <div className="project-meta-col">
            <div className="meta-card">
              <h3 className="meta-title">My role</h3>
              <p className="project-text">{project.role}</p>
            </div>
            <div className="meta-card">
              <h3 className="meta-title">Technologies</h3>
              <div className="tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="meta-card">
              <h3 className="meta-title">Development approach</h3>
              <p className="project-text">{project.approach}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section project-features">
        <div className="container">
          <div className="section-head">
            <div className="kicker"><span>03</span> Core features</div>
            <h2 className="heading-lg">What went into it</h2>
          </div>
          <div className="feature-grid">
            {project.features.map((feature) => (
              <div key={feature} className="feature-item">
                <span className="feature-dot" aria-hidden="true" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-gallery">
        <div className="container">
          <div className="section-head">
            <div className="kicker"><span>04</span> Visuals</div>
            <h2 className="heading-lg">Screenshot gallery</h2>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img} alt={`${project.name} screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-links">
        <div className="container project-links-inner">
          <div className="project-links-copy">
            <h2 className="heading-md">View the project</h2>
            <p>Source code and live demo (where available).</p>
          </div>
          <div className="project-links-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="link-button">
                Source code on GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="link-button link-button--live">
                Live demo
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section project-nav">
        <div className="container project-nav-inner">
          <Link href="/projects" className="nav-back">
            ← Back to Projects
          </Link>
          <Link href={`/projects/${nextProject.slug}`} className="nav-next">
            {nextProject.name} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
