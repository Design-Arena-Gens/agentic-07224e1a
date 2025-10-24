'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const testimonials = [
  {
    quote:
      'Divinoft Developers rebuilt our fintech experience end-to-end. Their Django expertise and SEO playbooks helped us close enterprise deals faster than anticipated.',
    name: 'Arjun Iyer',
    role: 'Co-founder, FinEdge Capital (Mumbai)'
  },
  {
    quote:
      'From UX research to multilingual content, the team delivered a healthcare portal that now attracts patients from across South India with a 3x uptick in bookings.',
    name: 'Dr. Kavya Subramanian',
    role: 'Medical Director, HealthSphere Clinics (Bengaluru)'
  },
  {
    quote:
      'Their MERN engineers executed a complex marketplace with payment automation and real-time seller analytics—while keeping Core Web Vitals in the green.',
    name: 'Ananya Sharma',
    role: 'Product Head, CraftKart Marketplace (Jaipur)'
  }
];

export default function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="section-anchor mx-auto mt-28 w-full max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="text-center md:text-left"
      >
        <h2 className="font-heading text-3xl font-semibold text-white">Loved by product, marketing, and technology leaders</h2>
        <p className="mt-3 text-sm text-[rgba(229,232,255,0.75)] md:max-w-2xl">
          Our clients trust us to treat every build as a growth engine. Here’s what they say about working
          with Divinoft Developers.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: index * 0.12 }}
            className="glass-panel relative flex h-full flex-col gap-4 rounded-3xl border border-[rgba(113,246,249,0.2)] p-6 text-left"
          >
            <span className="text-4xl text-accent">“</span>
            <p className="text-sm leading-relaxed text-[rgba(229,232,255,0.78)]">{item.quote}</p>
            <footer className="mt-auto">
              <p className="font-heading text-sm font-semibold text-white">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[rgba(229,232,255,0.6)]">{item.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </AnimatedSection>
  );
}
