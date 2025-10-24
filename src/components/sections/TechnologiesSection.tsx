'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const stacks = [
  {
    name: 'Python & Django',
    description: 'Enterprise-grade backend frameworks powering secure APIs, admin portals, and automation for BFSI, healthcare, and manufacturing.',
    stats: ['Multi-tenant SaaS', 'Celery Automation', 'DRF APIs']
  },
  {
    name: 'MERN & Next.js',
    description: 'React, Next.js, Node, and MongoDB for real-time dashboards, commerce storefronts, and content platforms with lightning-fast delivery.',
    stats: ['SSR & SSG', 'Realtime WebSockets', 'Edge Rendering']
  },
  {
    name: 'DevOps & Cloud',
    description: 'Managed hosting on AWS, Azure, GCP, and Vercel with IaC, observability, and proactive reliability engineering.',
    stats: ['AWS & GCP', 'CI/CD Pipelines', '24/7 Monitoring']
  }
];

export default function TechnologiesSection() {
  return (
    <AnimatedSection id="projects" className="section-anchor mx-auto mt-28 w-full max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-[rgba(113,246,249,0.18)] bg-gradient-to-br from-[rgba(3,6,18,0.9)] via-[rgba(8,14,28,0.78)] to-[rgba(12,18,36,0.88)] p-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold text-white">Technology crafted for scale and sparkle</h2>
            <p className="mt-4 text-sm leading-relaxed text-[rgba(229,232,255,0.75)]">
              Our engineers partner with CTOs and marketing leads to deliver immersive experiences that
              are as performant as they are beautiful. Every solution is measured against traffic spikes,
              SEO benchmarks, and India-centric user behaviour insights.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="glass-panel gradient-ring w-full max-w-xs rounded-3xl p-6 text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[rgba(229,232,255,0.7)]">Core Web Vitals</p>
            <p className="mt-2 text-4xl font-heading font-semibold text-white">98</p>
            <p className="mt-1 text-xs text-[rgba(229,232,255,0.65)]">average score across new builds</p>
          </motion.div>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-3xl" />
              <div className="relative flex h-full flex-col gap-4">
                <h3 className="font-heading text-xl font-semibold text-white">{stack.name}</h3>
                <p className="text-sm leading-relaxed text-[rgba(229,232,255,0.7)]">{stack.description}</p>
                <ul className="mt-auto space-y-2 text-xs uppercase tracking-[0.28em] text-[rgba(229,232,255,0.65)]">
                  {stack.stats.map((stat) => (
                    <li key={stat} className="flex items-center gap-3">
                      <span className="h-1 w-6 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
