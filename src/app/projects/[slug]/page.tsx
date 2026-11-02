import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectBySlug, getAllProjects } from '@/data/portfolio';
import { ProjectScreenshotGallery } from '@/components/projects/ProjectScreenshotGallery';

type CaseStudyImage = {
  src: string;
  alt: string;
  label: string;
};

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

  const mehediCaseStudies: CaseStudyImage[] = [
    {
      src: '/images/projects/live-screenshots/mehedi-by-meherin/01-storefront-homepage.png',
      alt: 'Mehedi By Meherin storefront homepage',
      label: 'Storefront Experience',
    },
    {
      src: '/images/projects/live-screenshots/mehedi-by-meherin/02-admin-dashboard.png',
      alt: 'Mehedi By Meherin admin dashboard',
      label: 'Business Administration Dashboard',
    },
    {
      src: '/images/projects/live-screenshots/mehedi-by-meherin/03-booking-page.png',
      alt: 'Mehedi By Meherin customer booking page',
      label: 'Customer Booking Experience',
    },
  ];

  const quizoraCaseStudies: CaseStudyImage[] = [
    {
      src: '/images/projects/live-screenshots/quizora/05-public-homepage.png',
      alt: 'Quizora public homepage',
      label: 'Main Homepage',
    },
    {
      src: '/images/projects/live-screenshots/quizora/01-role-selection.png',
      alt: 'Quizora role selection page',
      label: 'Role Selection',
    },
    {
      src: '/images/projects/live-screenshots/quizora/02-faculty-dashboard.png',
      alt: 'Quizora faculty dashboard',
      label: 'Faculty Dashboard',
    },
    {
      src: '/images/projects/live-screenshots/quizora/03-student-dashboard.png',
      alt: 'Quizora student dashboard',
      label: 'Student Dashboard',
    },
    {
      src: '/images/projects/live-screenshots/quizora/04-admin-dashboard.png',
      alt: 'Quizora admin dashboard',
      label: 'Admin Dashboard',
    },
  ];

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
          <img src={project.image} alt={`${project.name} project interface`} />
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

      {slug === 'mehedi-by-meherin' && (
        <section className="section case-study-section case-study--mehedi">
          <div className="container">
            <div className="case-study-head">
              <div className="kicker"><span>03</span> Real product experience</div>
              <h2 className="heading-lg">Explore the actual storefront, business dashboard and customer booking experience.</h2>
            </div>
            <div className="case-study-grid">
              {mehediCaseStudies.map((item, i) => (
                <div key={item.src} className="case-study-item group">
                  <div className="case-study-visual">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={500}
                      className="case-study-image"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      quality={100}
                      sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 380px"
                    />
                    <div className="case-study-badge">{i + 1}</div>
                  </div>
                  <div className="case-study-copy">
                    <h3 className="case-study-title">{item.label}</h3>
                    <p className="case-study-desc">{getMehediDescription(item.label)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {slug === 'quizora' && (
        <section className="section case-study-section case-study--quizora">
          <div className="container">
            <div className="case-study-head">
              <div className="kicker"><span>03</span> A complete learning ecosystem</div>
              <h2 className="heading-lg">One intelligent platform designed for students, teachers and administrators.</h2>
            </div>
            <div className="case-study-groups">
              <div className="case-study-group">
                <h3 className="case-study-group-title">Public Experience</h3>
                <div className="case-study-row">
                  {quizoraCaseStudies.slice(0, 2).map((item, i) => (
                    <div key={item.src} className="case-study-item group">
                      <div className="case-study-visual">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={400}
                          height={320}
                          className="case-study-image"
                          loading={i === 0 ? 'eager' : 'lazy'}
                          quality={100}
                          sizes="(max-width: 640px) 100vw, 48vw"
                        />
                        <div className="case-study-badge">{i + 1}</div>
                      </div>
                      <div className="case-study-copy">
                        <h3 className="case-study-title">{item.label}</h3>
                        <p className="case-study-desc">{getQuizoraDescription(item.label)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="case-study-group">
                <h3 className="case-study-group-title">Faculty Workspace</h3>
                <div className="case-study-row">
                  {quizoraCaseStudies.slice(2, 3).map((item, i) => (
                    <div key={item.src} className="case-study-item group">
                      <div className="case-study-visual">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={400}
                          height={320}
                          className="case-study-image"
                          loading="lazy"
                          quality={100}
                          sizes="(max-width: 640px) 100vw, 48vw"
                        />
                        <div className="case-study-badge">{i + 1}</div>
                      </div>
                      <div className="case-study-copy">
                        <h3 className="case-study-title">{item.label}</h3>
                        <p className="case-study-desc">{getQuizoraDescription(item.label)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="case-study-group">
                <h3 className="case-study-group-title">Student Workspace</h3>
                <div className="case-study-row">
                  {quizoraCaseStudies.slice(3, 4).map((item, i) => (
                    <div key={item.src} className="case-study-item group">
                      <div className="case-study-visual">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={400}
                          height={320}
                          className="case-study-image"
                          loading="lazy"
                          quality={100}
                          sizes="(max-width: 640px) 100vw, 48vw"
                        />
                        <div className="case-study-badge">{i + 1}</div>
                      </div>
                      <div className="case-study-copy">
                        <h3 className="case-study-title">{item.label}</h3>
                        <p className="case-study-desc">{getQuizoraDescription(item.label)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="case-study-group">
                <h3 className="case-study-group-title">Administration</h3>
                <div className="case-study-row">
                  {quizoraCaseStudies.slice(4, 5).map((item, i) => (
                    <div key={item.src} className="case-study-item group">
                      <div className="case-study-visual">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={400}
                          height={320}
                          className="case-study-image"
                          loading="lazy"
                          quality={100}
                          sizes="(max-width: 640px) 100vw, 48vw"
                        />
                        <div className="case-study-badge">{i + 1}</div>
                      </div>
                      <div className="case-study-copy">
                        <h3 className="case-study-title">{item.label}</h3>
                        <p className="case-study-desc">{getQuizoraDescription(item.label)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section project-features">
        <div className="container">
          <div className="section-head">
            <div className="kicker"><span>04</span> Core features</div>
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
          <ProjectScreenshotGallery
            images={project.gallery.map((src, i) => ({
              src,
              alt: `${project.name} interface screenshot ${i + 1}`,
              label: `Screenshot ${i + 1}`,
            }))}
            title="Interface gallery"
            subtitle="Real screenshots from the live website."
            featuredIndex={0}
          />
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

function getMehediDescription(label: string): string {
  switch (label) {
    case 'Storefront Experience':
      return 'The public-facing storefront where visitors browse mehndi designs, explore henna essentials, and discover services.';
    case 'Business Administration Dashboard':
      return 'The admin console for managing products, bookings, orders and customers — the operational backbone of the business.';
    case 'Customer Booking Experience':
      return 'The customer appointment booking interface for selecting designs, entering details and confirming preferences.';
    default:
      return '';
  }
}

function getQuizoraDescription(label: string): string {
  switch (label) {
    case 'Main Homepage':
      return 'The public landing page introducing the Quizora platform with quiz previews and platform overview.';
    case 'Role Selection':
      return 'Entry point for teachers and students to choose their role and access the appropriate workspace.';
    case 'Faculty Dashboard':
      return 'The teacher workspace for course management, question management and running live assessments.';
    case 'Student Dashboard':
      return 'The student workspace with course library, live classroom access and personal rankings.';
    case 'Admin Dashboard':
      return 'The administration console for user management, teacher approval and platform oversight.';
    default:
      return '';
  }
}
