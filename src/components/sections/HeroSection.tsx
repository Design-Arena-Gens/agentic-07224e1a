'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pb-32 pt-36">
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          src="https://assets.mixkit.co/videos/preview/mixkit-programmer-typing-fast-on-the-keyboard-5149-large.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(3,6,23,0.85)] via-[rgba(3,6,23,0.8)] to-[rgba(12,18,42,0.94)]" />
        <div className="smoke-overlay" aria-hidden="true" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="noise-texture" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 text-center md:text-left">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(113,246,249,0.25)] bg-[rgba(6,12,28,0.65)] px-5 py-2 text-xs uppercase tracking-[0.35em] text-[rgba(255,255,255,0.6)] md:self-start"
        >
          End-to-End Digital Engineering for India
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.6rem]"
        >
          Designing and engineering <span className="text-accent">future-ready</span> web platforms
          for brands across India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="max-w-3xl text-lg leading-relaxed text-[rgba(229,232,255,0.78)] md:text-xl"
        >
          Divinoft Developers combines strategy, UX, and cutting-edge full-stack execution to ship
          performant, secure, and search-optimized experiences. From design-to-code sprints, redesign &
          redevelopment, to SEO content and managed hosting, our Salem-based team helps Indian startups,
          SMEs, and enterprises launch platforms that attract traffic, convert customers, and scale
          effortlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="flex flex-col items-center gap-6 md:flex-row md:items-center"
        >
          <a href="#contact" className="cta-button px-10 py-4 text-sm font-semibold uppercase tracking-[0.4em]">
            <span>Schedule a Strategy Call</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-[rgba(229,232,255,0.75)]">
            <div>
              <span className="text-3xl font-heading font-semibold text-white">120+</span>
              <p className="mt-1 text-xs uppercase tracking-[0.35em]">Web Launches</p>
            </div>
            <div>
              <span className="text-3xl font-heading font-semibold text-white">5x</span>
              <p className="mt-1 text-xs uppercase tracking-[0.35em]">Average ROI</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1 }}
          className="glass-panel prism-card mx-auto mt-12 max-w-4xl rounded-3xl p-10 text-left md:ml-0 md:mr-auto"
        >
          <div className="prism-card-content grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-white">A-Z Product Lifecycle</h2>
              <p className="mt-3 text-sm text-[rgba(229,232,255,0.75)]">
                Custom UX/UI design, full-stack engineering with Python/Django & MERN, SEO content,
                hosting, analytics, and continuous optimisation—all delivered by one integrated team.
              </p>
            </div>
            <ul className="space-y-3 text-sm font-medium text-[rgba(229,232,255,0.8)]">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" /> Discovery & Conversion Strategy
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" /> Experience & Interface Design
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" /> Agile Engineering & Integrations
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" /> SEO, Analytics & Growth Ops
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 hidden h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(113,246,249,0.25)] bg-[rgba(4,9,18,0.65)] md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.span
          className="text-xs uppercase tracking-[0.4em] text-[rgba(255,255,255,0.7)]"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
