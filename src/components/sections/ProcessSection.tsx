'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const steps = [
  {
    title: 'Discover & Align',
    description:
      'We audit digital touchpoints, interview stakeholders, and map audience journeys to align KPIs with growth experiments tailored for Indian markets.',
    duration: 'Week 1',
    metrics: ['Market Research', 'Technical Audit', 'Conversion Strategy']
  },
  {
    title: 'Design Systems & UX Flows',
    description:
      'Figma-based design labs deliver responsive UI kits, micro-interactions, and content architecture optimised for multilingual audiences.',
    duration: 'Weeks 2-3',
    metrics: ['Interactive Prototypes', 'Design Tokens', 'Usability Testing']
  },
  {
    title: 'Engineering & Automation',
    description:
      'We build with Python, Django, React, and Next.js—shipping secure APIs, dashboards, eCommerce stacks, and automation pipelines.',
    duration: 'Weeks 4-8',
    metrics: ['Agile Sprints', 'CI/CD Pipelines', 'Infrastructure as Code']
  },
  {
    title: 'Launch, SEO & Scale',
    description:
      'Full-fidelity QA, SEO schema, content migration, and managed cloud hosting backed by Lighthouse and Core Web Vitals monitoring.',
    duration: 'Weeks 9-10',
    metrics: ['Technical SEO', 'Analytics & Attribution', 'Managed Hosting']
  }
];

export default function ProcessSection() {
  return (
    <AnimatedSection id="process" className="section-anchor relative mx-auto mt-28 w-full max-w-6xl px-6">
      <div className="relative rounded-3xl border border-[rgba(113,246,249,0.15)] bg-[rgba(9,15,29,0.75)] p-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="font-heading text-3xl font-semibold text-white"
        >
          Growth-obsessed delivery framework
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mt-4 max-w-3xl text-sm leading-relaxed text-[rgba(229,232,255,0.75)]"
        >
          We pair structured discovery with agile engineering and measurable optimisation. Every
          engagement is designed to reduce launch risk, accelerate ROI, and position your brand to win
          high-intent traffic across India’s digital landscape.
        </motion.p>

        <div className="mt-12 grid gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-[rgba(113,246,249,0.18)] bg-[rgba(6,11,24,0.65)] p-6"
            >
              <div className="absolute -left-16 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent/25 to-primary/25 blur-3xl transition duration-700 ease-out group-hover:scale-125 group-hover:opacity-90 md:block" />
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4">
                    <span className="text-sm uppercase tracking-[0.4em] text-[rgba(255,255,255,0.55)]">Step {index + 1}</span>
                    <span className="rounded-full border border-[rgba(113,246,249,0.25)] px-3 py-1 text-xs text-[rgba(255,255,255,0.6)]">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgba(229,232,255,0.75)]">{step.description}</p>
                </div>
                <ul className="grid gap-2 text-xs uppercase tracking-[0.3em] text-[rgba(229,232,255,0.65)]">
                  {step.metrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-3">
                      <span className="h-[1px] w-10 bg-gradient-to-r from-accent/60 via-white/60 to-primary/60" />
                      {metric}
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
