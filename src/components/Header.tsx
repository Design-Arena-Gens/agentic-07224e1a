'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#projects', label: 'Experience' },
  { href: '#seo', label: 'SEO & Growth' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
        isScrolled ? 'nav-blur py-4 shadow-lg' : 'py-6'
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <Link href="#hero" className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(113,246,249,0.1)] shadow-[0_0_40px_rgba(113,246,249,0.35)]"
          >
            <span className="text-xl font-semibold text-accent">D</span>
          </motion.div>
          <div>
            <span className="block font-heading text-lg font-semibold uppercase tracking-[0.35em] text-[rgba(255,255,255,0.85)]">
              Divinoft
            </span>
            <span className="block font-medium text-[rgba(255,255,255,0.55)]">
              Developers
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative font-medium tracking-wide text-[rgba(240,242,255,0.75)] transition-colors hover:text-white"
            >
              <span>{item.label}</span>
              <motion.span
                layoutId="active-link"
                className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-0"
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <motion.a
            href="#contact"
            className="cta-button px-6 py-2 font-semibold uppercase tracking-widest text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start a Project</span>
          </motion.a>
        </div>

        <motion.button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(113,246,249,0.2)] bg-[rgba(10,18,33,0.7)] md:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            menu?.classList.toggle('hidden');
          }}
          aria-label="Toggle navigation"
        >
          <motion.span
            className="block h-[2px] w-6 bg-white"
            animate={{ rotate: isScrolled ? 0 : 0 }}
          />
        </motion.button>
      </div>

      <div id="mobile-menu" className="nav-blur mx-6 mt-4 hidden flex-col gap-4 rounded-2xl border border-[rgba(113,246,249,0.15)] p-6 md:hidden">
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-base font-medium text-[rgba(240,242,255,0.8)]"
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" className="cta-button px-6 py-3 text-center text-sm font-semibold uppercase tracking-widest">
          <span>Start a Project</span>
        </a>
      </div>
    </header>
  );
}
