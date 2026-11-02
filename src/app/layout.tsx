import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import './creative.css';
import { inter, spaceGrotesk } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { portfolioData } from '@/data/portfolio';

const { profile } = portfolioData;

export const metadata: Metadata = {
  metadataBase: new URL('https://sudiptodas.vercel.app'),
  title: {
    template: '%s | Sudipto Das — Full Stack Developer',
    default: 'Sudipto Das — Full Stack Developer',
  },
  description:
    'Sudipto Das is a full stack developer based in Khulna, Bangladesh, building e-commerce platforms, AI-powered tools, and modern web applications.',
  authors: [{ name: profile.name, url: 'https://sudiptodas.vercel.app' }],
  openGraph: {
    title: 'Sudipto Das — Full Stack Developer',
    description:
      'Full-stack web applications, e-commerce and AI integration by Sudipto Das, a full stack developer in Khulna, Bangladesh.',
    type: 'website',
    url: 'https://sudiptodas.vercel.app',
    siteName: 'Sudipto Das — Full Stack Developer',
    images: [{ url: '/sudipto.jpg', width: 863, height: 1101, alt: 'Portrait of Sudipto Das' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudipto Das — Full Stack Developer',
    description:
      'Sudipto Das is a full stack developer based in Khulna, Bangladesh, building e-commerce platforms, AI-powered tools, and modern web applications.',
    images: ['/sudipto.jpg'],
  },
  alternates: {
    canonical: 'https://sudiptodas.vercel.app',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* No-flash theme init: applies saved/system theme before first paint */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{const t=localStorage.getItem('portfolio-theme');const d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',t==='light'||t==='dark'?t:d?'dark':'light')}catch(e){}})()`}
        </Script>
        <Script
          id="portfolio-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              jobTitle: profile.title,
              url: 'https://sudiptodas.vercel.app',
              image: 'https://sudiptodas.vercel.app/sudipto.jpg',
              email: profile.email,
              telephone: profile.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Khulna',
                addressCountry: 'Bangladesh',
              },
              knowsAbout: [
                'Full-stack web development',
                'E-commerce platforms',
                'REST APIs',
                'AI integration',
                'Next.js',
                'React',
                'Laravel',
              ],
              sameAs: [
                'https://github.com/sudipto224/',
                'https://www.linkedin.com/in/sudipto-das-7b3a4327a/',
                'https://wa.me/8801701054096',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
