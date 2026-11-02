import { getAllProjects, portfolioData } from '@/data/portfolio';

const baseUrl = 'https://sudiptodas.vercel.app';

const routes = ['', '/about', '/projects', '/skills', '/services', '/journey', '/contact'];

export default async function sitemap() {
  const projectRoutes = getAllProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  })).concat(projectRoutes);
}
