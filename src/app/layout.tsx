import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sudipto Das — Full Stack Developer',
  description: 'Sudipto Das is a full-stack developer in Khulna, Bangladesh, building e-commerce, AI-powered tools and modern web applications.',
  openGraph: {
    title: 'Sudipto Das — Full Stack Developer',
    description: 'Full-stack web applications, e-commerce and AI integration.',
    images: [{ url: '/sudipto.jpg' }],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}