'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  {
    title: 'Full-Stack Web Development',
    description:
      'Robust platforms built with Python, Django, and the MERN stack. We architect scalable APIs, real-time dashboards, and secure user journeys.',
    highlights: ['Architecture & DevOps', 'API & Microservices', 'Performance Engineering'],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-code-typing-close-up-2847-large.mp4'
  },
  {
    title: 'Experience Design to Code',
    description:
      'Discovery workshops, UI/UX design systems, rapid prototyping, and pixel-perfect implementation for responsive, accessible interfaces.',
    highlights: ['Design Systems', 'Micro-interactions', 'WCAG Compliance'],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-ux-designer-working-on-a-tablet-4343-large.mp4'
  },
  {
    title: 'SEO & Growth Engineering',
    description:
      'SEO-first content strategies, Core Web Vitals optimisation, schema, analytics integration, and conversion rate experimentation for Indian markets.',
    highlights: ['Technical SEO', 'Content Strategy', 'Analytics & CRO'],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-meeting-5089-large.mp4'
  },
  {
    title: 'Managed Hosting & Reliability',
    description:
      'Automated CI/CD, cloud hosting, 24/7 uptime monitoring, security hardening, and scalable infrastructure on AWS, GCP, and Vercel.',
    highlights: ['CI/CD Automation', 'Cloud & Edge Hosting', 'Security Audits'],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-server-room-with-advanced-technology-4510-large.mp4'
  }
];

export default function ServicesSection() {
  return (
    <AnimatedSection id="services" className="section-anchor relative mx-auto mt-24 w-full max-w-6xl px-6">
      <div className="absolute -inset-x-16 top-0 h-56 rounded-full bg-gradient-to-b from-[rgba(113,246,249,0.12)] via-transparent to-transparent blur-[90px]" aria-hidden="true" />
      <div className="relative flex flex-col gap-12">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="inline-flex w-fit items-center justify-center gap-2 self-center rounded-full border border-[rgba(113,246,249,0.2)] bg-[rgba(11,18,36,0.65)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.4em] text-[rgba(255,255,255,0.6)] md:self-start"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl font-semibold leading-snug text-white md:text-4xl"
          >
            A strategic squad covering every layer—from research and design to deployment and growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="text-base leading-relaxed text-[rgba(229,232,255,0.78)] md:max-w-3xl"
          >
            Whether you are launching a new SaaS product, modernising a legacy portal, or expanding your
            eCommerce footprint across India, Divinoft Developers provides the specialised teams to make
            it happen with velocity and precision.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="glass-panel prism-card hover-glow relative overflow-hidden rounded-3xl border border-[rgba(113,246,249,0.12)] p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ delay: index * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 -z-10 opacity-60">
                <video
                  className="h-full w-full object-cover video-mask"
                  src={service.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(3,6,23,0.92)] via-[rgba(5,10,24,0.85)] to-[rgba(8,16,38,0.92)]" />
              </div>
              <div className="prism-card-content relative flex h-full flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold text-white">{service.title}</h3>
                  <span className="rounded-full border border-[rgba(113,246,249,0.25)] bg-[rgba(9,15,29,0.75)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[rgba(255,255,255,0.65)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[rgba(229,232,255,0.75)]">{service.description}</p>
                <ul className="mt-auto grid gap-3">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[rgba(255,255,255,0.6)]">
                      <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-accent/60 via-white/60 to-primary/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
