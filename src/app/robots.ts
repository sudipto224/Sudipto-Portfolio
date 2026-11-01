export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sudipto-portfolio-gamma.vercel.app/sitemap.xml',
  };
}
