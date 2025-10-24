import type { Metadata } from 'next';
import './globals.css';
import { Inter, Sora } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: {
    default: 'Divinoft Developers | Full-Stack Web Development Agency in India',
    template: '%s | Divinoft Developers'
  },
  description:
    'Divinoft Developers is a Salem-based full-stack web development studio delivering Python, Django, and MERN solutions with design-to-deployment services, SEO, hosting, and digital growth for ambitious Indian brands.',
  keywords: [
    'Divinoft Developers',
    'full stack development India',
    'Python Django agency Salem',
    'MERN stack development company',
    'website redesign and SEO services',
    'web hosting and maintenance Tamilnadu'
  ],
  metadataBase: new URL('https://agentic-07224e1a.vercel.app'),
  openGraph: {
    title: 'Divinoft Developers | High-Performance Websites for India',
    description:
      'End-to-end web development, redesign, hosting, and SEO services powered by Python, Django, and the MERN stack. Serving ambitious startups and enterprises across India.',
    url: 'https://agentic-07224e1a.vercel.app',
    siteName: 'Divinoft Developers',
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divinoft Developers | Next-Gen Digital Engineering',
    description:
      'Build blazing-fast, SEO-first digital experiences with Divinoft Developers—the Salem-based team delivering for businesses across India.'
  },
  alternates: {
    canonical: 'https://agentic-07224e1a.vercel.app'
  },
  category: 'technology'
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Divinoft Developers',
  url: 'https://agentic-07224e1a.vercel.app',
  logo: 'https://agentic-07224e1a.vercel.app/logo.svg',
  description:
    'Divinoft Developers is a full-stack web development company based in Salem, Tamil Nadu delivering Python, Django, MERN, SEO, and managed hosting services across India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avinashi Road',
    addressLocality: 'Salem',
    addressRegion: 'Tamil Nadu',
    postalCode: '636001',
    addressCountry: 'IN'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-90800-12345',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'ta']
    }
  ],
  sameAs: [
    'https://www.linkedin.com/company/divinoft-developers',
    'https://www.instagram.com/divinoftdevelopers'
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'India'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}
        data-theme="dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="noise-texture" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
