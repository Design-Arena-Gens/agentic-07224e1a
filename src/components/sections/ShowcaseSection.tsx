'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const showcases = [
  {
    name: 'FinEdge Capital',
    sector: 'Fintech | Mumbai',
    description:
      'Replatformed investment advisory portal with Django, React, and multilingual content, leading to a 4.2x lift in qualified leads within 90 days.',
    metrics: ['4.2x Leads', '1.8s LCP', '99.2% Uptime'],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-financial-graph-on-a-laptop-screen-4873-large.mp4'
  },
  {
    name: 'HealthSphere Clinics',
    sector: 'Healthcare | Bengaluru',
    description:
      'Designed appointment funnels, SEO-rich health content, and analytics dashboards for a clinic chain, boosting organic traffic across India by 320%.',
    metrics: ['320% Organic', '40% More Bookings', 'NPS 72'],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-doctor-looking-at-a-tablet-4077-large.mp4'
  },
  {
    name: 'CraftKart Marketplace',
    sector: 'eCommerce | Jaipur',
    description:
      'Headless commerce experience with MERN stack, Razorpay integration, and PWA storefront optimised for tier-2 city audiences.',
    metrics: ['210% Revenue', '92 Lighthouse', '25ms TTFB'],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-shopping-online-1100-large.mp4'
  }
];

export default function ShowcaseSection() {
  return (
    <AnimatedSection className="section-anchor mx-auto mt-28 w-full max-w-6xl px-6">
      <div className="flex flex-col gap-8 text-center md:text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-[rgba(113,246,249,0.25)] bg-[rgba(3,7,18,0.7)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.4em] text-[rgba(255,255,255,0.6)] md:self-start"
        >
          Proven Impact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="font-heading text-3xl font-semibold text-white md:text-4xl"
        >
          Digital transformations engineered for performance and retention
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="text-base text-[rgba(229,232,255,0.75)] md:max-w-3xl"
        >
          Across BFSI, healthcare, retail, and SaaS, Divinoft Developers ships experiences that balance
          brand storytelling with measurable growth. Explore a few of our flagship implementations.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {showcases.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel hover-glow relative overflow-hidden rounded-3xl border border-[rgba(113,246,249,0.15)]"
          >
            <div className="relative h-48 overflow-hidden">
              <video
                className="h-full w-full object-cover"
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,10,23,0.9)] via-transparent to-transparent" />
            </div>
            <div className="prism-card-content flex flex-col gap-4 p-6 text-left">
              <div>
                <h3 className="font-heading text-xl font-semibold text-white">{item.name}</h3>
                <span className="mt-1 block text-xs uppercase tracking-[0.3em] text-[rgba(255,255,255,0.58)]">{item.sector}</span>
              </div>
              <p className="text-sm leading-relaxed text-[rgba(229,232,255,0.75)]">{item.description}</p>
              <div className="mt-auto flex flex-wrap gap-3 text-xs font-semibold text-[rgba(229,232,255,0.75)]">
                {item.metrics.map((metric) => (
                  <span key={metric} className="rounded-full border border-[rgba(113,246,249,0.25)] bg-[rgba(6,11,24,0.6)] px-4 py-1 uppercase tracking-[0.3em]">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
