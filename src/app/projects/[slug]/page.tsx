import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Github, FileText } from 'lucide-react';
import { getProjectBySlug, getAllProjects } from '@/data/portfolio';
import { ProjectScreenshotGallery } from '@/components/projects/ProjectScreenshotGallery';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
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

export default async function ProjectDetail({ params }: ProjectPageProps) {
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
          <div className="project-hero-grid">
            <div className="project-hero-content">
              <div className="project-hero-badge">{project.category}</div>
              <h1 className="project-hero-title">{project.name}</h1>
              <p className="project-hero-intro">{project.description}</p>

              <div className="project-hero-meta">
                <div className="meta-item">
                  <span className="meta-label">Role</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{project.period}</span>
                </div>
              </div>

              <div className="project-hero-tech">
                <span className="tech-label">Technologies used</span>
                <div className="tech-chip-wrap">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-hero-actions">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn--live"
                    aria-label={`Live demo for ${project.name}. Opens in a new tab`}
                  >
                    Live Demo <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn--github"
                    aria-label={`GitHub source code for ${project.name}. Opens in a new tab`}
                  >
                    Source Code <Github size={16} strokeWidth={2} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            <div className="project-hero-visual">
              <div className="browser-mockup">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                  </div>
                  <div className="browser-address">{project.github}</div>
                </div>
                <div className="browser-viewport">
                  <Image
                    src={project.image}
                    alt={`${project.name} — real application interface`}
                    width={900}
                    height={600}
                    className="project-screenshot"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 92vw, 520px"
                  />
                </div>
              </div>
              <p className="screenshot-caption">
                Real screenshot from the live {project.name} application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section project-body">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-primary">
              <div className="editorial-section">
                <h2 className="section-heading">Project Overview</h2>
                <p className="editorial-text">{project.overview}</p>
              </div>

              <div className="editorial-section">
                <h2 className="section-heading">My Responsibilities</h2>
                <p className="editorial-text">{project.approach}</p>
              </div>

              <div className="editorial-section">
                <h2 className="section-heading">Key Features</h2>
                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature} className="feature-item">
                      <span className="feature-dot" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="editorial-section">
                <h2 className="section-heading">Technologies Used</h2>
                <p className="editorial-text">
                  This project is built with {project.tech.slice(0, -1).join(', ')} and{' '}
                  {project.tech[project.tech.length - 1]}.
                </p>
                <div className="tech-chip-wrap">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="editorial-section">
                <h2 className="section-heading">Real Application Screenshots</h2>
                <p className="gallery-lead">
                  Genuine screenshots from the live application. Select an image to enlarge it.
                </p>
                <ProjectScreenshotGallery
                  images={project.gallery.map((src, i) => ({
                    src,
                    alt: `${project.name} interface screenshot ${i + 1}`,
                    label: `Screenshot ${i + 1}`,
                  }))}
                  title=""
                  subtitle=""
                  featuredIndex={0}
                />
              </div>

              <div className="editorial-section">
                <h2 className="section-heading">Project Challenges and Solutions</h2>
                <div className="challenge-grid">
                  {project.challenges.map((challenge) => (
                    <div key={challenge.title} className="challenge-card">
                      <div className="challenge-head">
                        <span className="challenge-badge">Challenge</span>
                        <h3 className="challenge-title">{challenge.title}</h3>
                      </div>
                      <p className="challenge-text">{challenge.description}</p>
                      <div className="challenge-solution">
                        <span className="solution-label">Solution</span>
                        <p>{challenge.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="editorial-secondary">
              <div className="editorial-card project-actions-card">
                <h2 className="card-heading">View the project</h2>
                <p className="card-lead">Source code and live demo.</p>
                <div className="card-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn card-btn--github"
                      aria-label={`GitHub source code for ${project.name}. Opens in a new tab`}
                    >
                      <Github size="17" strokeWidth={2} aria-hidden="true" />
                      Source Code on GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn card-btn--live"
                      aria-label={`Live demo for ${project.name}. Opens in a new tab`}
                    >
                      Live Demo <ArrowUpRight size="17" strokeWidth={2} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <div className="card-divider" aria-hidden="true" />
                <p className="card-note">
                  Both links open in a new tab so you can keep exploring the case study.
                </p>
              </div>

              {project.approach && (
                <div className="editorial-card approach-card">
                  <h2 className="card-heading">Development approach</h2>
                  <p className="editorial-text card-text">{project.approach}</p>
                </div>
              )}
            </aside>
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
