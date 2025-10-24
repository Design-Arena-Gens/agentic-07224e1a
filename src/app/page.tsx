import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import SEOSection from '@/components/sections/SEOSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <TechnologiesSection />
      <div className="section-divider" />
      <ShowcaseSection />
      <div className="section-divider" />
      <SEOSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <ContactSection />
    </>
  );
}
