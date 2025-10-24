'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const seoHighlights = [
  {
    title: 'India-ready SEO Playbooks',
    description:
      'Content clusters in English, Tamil, and Hindi built on keyword intent research for metro and tier-2 markets. Schema, hreflang, and Core Web Vitals included.',
    icon: '🌐'
  },
  {
    title: 'Conversion-Focused Copywriting',
    description:
      'Story-driven, keyword-rich messaging that highlights your USPs while staying compliant with industries such as BFSI and healthcare.',
    icon: '📝'
  },
  {
    title: 'Performance Analytics & CRO',
    description:
      'Google Analytics 4, Mixpanel, and heatmaps wired to experiment on CTAs, forms, and landing pages for steady growth month over month.',
    icon: '📈'
  }
];

export default function SEOSection() {
  return (
    <AnimatedSection id="seo" className="section-anchor relative mx-auto mt-28 w-full max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-[rgba(113,246,249,0.18)] bg-[rgba(4,9,22,0.82)] p-10">
        <div className="absolute inset-0 -z-10">
          <div className="grid-glow h-full w-full" />
        </div>
        <div className="flex flex-col gap-6 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="font-heading text-3xl font-semibold text-white md:text-4xl"
          >
            SEO and storytelling engineered to dominate search across India
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-sm leading-relaxed text-[rgba(229,232,255,0.75)] md:max-w-3xl"
          >
            We combine technical SEO, schema markup, and persuasive copywriting to ensure your website
            outranks competitors in Chennai, Delhi, Bengaluru, Mumbai, and beyond. Every build is
            optimised for speed, mobile-first indexing, and local search intent.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {seoHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, delay: index * 0.1 }}
              className="glass-panel flex h-full flex-col gap-4 rounded-3xl border border-[rgba(113,246,249,0.2)] p-6"
            >
              <span className="text-4xl" role="img" aria-label={item.title}>
                {item.icon}
              </span>
              <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[rgba(229,232,255,0.75)]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 rounded-3xl border border-[rgba(113,246,249,0.2)] bg-[rgba(6,11,24,0.6)] p-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white">Ready for a nationwide launch?</h3>
            <p className="mt-2 text-sm text-[rgba(229,232,255,0.75)]">
              We map your conversion goals to keyword strategies, landing page experiences, and
              automation funnels. Let’s plan your brand’s next growth leap.
            </p>
          </div>
          <a href="#contact" className="cta-button px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em]">
            <span>Book SEO Audit</span>
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
