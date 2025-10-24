'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="section-anchor relative mx-auto mt-32 w-full max-w-6xl px-6">
      <div className="grid gap-10 rounded-3xl border border-[rgba(113,246,249,0.2)] bg-[rgba(6,11,24,0.75)] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(113,246,249,0.2)] bg-[rgba(3,7,18,0.7)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.4em] text-[rgba(255,255,255,0.6)]"
          >
            Let’s Collaborate
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="font-heading text-3xl font-semibold text-white"
          >
            Tell us about your product roadmap and we’ll co-create your next breakthrough.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="text-sm leading-relaxed text-[rgba(229,232,255,0.75)]"
          >
            We respond within one business day from our Salem HQ. Prefer a video call or an on-site
            workshop in Chennai, Bengaluru, Hyderabad, Mumbai, or Delhi NCR? Just note it in your
            message—we travel across India.
          </motion.p>

          <motion.form
            className="mt-4 grid gap-4 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2, duration: 0.9 }}
            action="https://formspree.io/f/xjkvblkr"
            method="POST"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-[rgba(229,232,255,0.6)]">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-xl border border-[rgba(113,246,249,0.3)] bg-[rgba(4,9,20,0.7)] px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60 focus:shadow-[0_0_25px_rgba(113,246,249,0.25)]"
                placeholder="Your name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-[rgba(229,232,255,0.6)]">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                required
                className="rounded-xl border border-[rgba(113,246,249,0.3)] bg-[rgba(4,9,20,0.7)] px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60 focus:shadow-[0_0_25px_rgba(113,246,249,0.25)]"
                placeholder="founder@brand.in"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs uppercase tracking-[0.3em] text-[rgba(229,232,255,0.6)]">
                Company & Location
              </label>
              <input
                id="company"
                name="company"
                className="rounded-xl border border-[rgba(113,246,249,0.3)] bg-[rgba(4,9,20,0.7)] px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60 focus:shadow-[0_0_25px_rgba(113,246,249,0.25)]"
                placeholder="Startup, Chennai"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="timeline" className="text-xs uppercase tracking-[0.3em] text-[rgba(229,232,255,0.6)]">
                Launch Timeline
              </label>
              <input
                id="timeline"
                name="timeline"
                className="rounded-xl border border-[rgba(113,246,249,0.3)] bg-[rgba(4,9,20,0.7)] px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60 focus:shadow-[0_0_25px_rgba(113,246,249,0.25)]"
                placeholder="Q1 2025"
                type="text"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-[rgba(229,232,255,0.6)]">
                Project Goals
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="rounded-xl border border-[rgba(113,246,249,0.3)] bg-[rgba(4,9,20,0.7)] px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60 focus:shadow-[0_0_25px_rgba(113,246,249,0.25)]"
                placeholder="Tell us about your product vision, current challenges, and desired outcomes."
              />
            </div>
            <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[rgba(229,232,255,0.6)]">
                <p>We’ll respond within 24 hours. Or call us: <a href="tel:+919080012345" className="text-accent">+91 90800 12345</a></p>
              </div>
              <button type="submit" className="cta-button px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em]">
                <span>Submit Brief</span>
              </button>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="glass-panel relative overflow-hidden rounded-3xl p-6"
        >
          <div className="absolute inset-0 -z-10 opacity-60">
            <video
              className="h-full w-full object-cover"
              src="https://assets.mixkit.co/videos/preview/mixkit-scenic-view-of-an-indian-city-4852-large.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(6,11,24,0.95)] via-[rgba(6,11,24,0.75)] to-[rgba(6,11,24,0.95)]" />
          </div>
          <div className="prism-card-content relative flex h-full flex-col gap-5 text-left">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white">Salem Studio</h3>
              <p className="mt-2 text-sm text-[rgba(229,232,255,0.7)]">
                Avinashi Road, Fairlands<br />
                Salem, Tamil Nadu 636001, India
              </p>
            </div>
            <div className="grid gap-3 text-sm text-[rgba(229,232,255,0.75)]">
              <p>
                <span className="font-semibold text-white">Email:</span> hello@divinoft.com
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span> +91 90800 12345
              </p>
              <p>
                <span className="font-semibold text-white">Service Locations:</span> India-wide (onsite & remote)
              </p>
            </div>
            <iframe
              className="mt-auto h-52 w-full rounded-2xl border-0"
              title="Divinoft Developers location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62302.40485191282!2d78.0915525!3d11.6643256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf0f0a06e7869%3A0x8d8f9c3a3be0d7df!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1697440000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
