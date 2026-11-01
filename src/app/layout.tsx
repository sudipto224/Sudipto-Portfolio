import type { Metadata } from 'next';
import './globals.css';
import './creative.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://sudipto-portfolio-gamma.vercel.app'),
  title: {
    template: '%s | Sudipto Das — Full Stack Developer',
    default: 'Sudipto Das — Full Stack Developer',
  },
  description:
    'Sudipto Das is a full stack developer based in Khulna, Bangladesh, building e-commerce platforms, AI-powered tools, and modern web applications.',
  openGraph: {
    title: 'Sudipto Das — Full Stack Developer',
    description:
      'Full-stack web applications, e-commerce and AI integration by Sudipto Das, a full stack developer in Khulna, Bangladesh.',
    type: 'website',
    images: [{ url: '/sudipto.jpg', width: 863, height: 1101, alt: 'Portrait of Sudipto Das' }],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
