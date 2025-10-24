import Link from 'next/link';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[rgba(113,246,249,0.15)] bg-[rgba(6,12,28,0.85)]">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="grid-glow h-full w-full" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="max-w-md">
          <h3 className="font-heading text-2xl font-semibold text-white">Divinoft Developers</h3>
          <p className="mt-4 text-sm leading-relaxed text-[rgba(229,232,255,0.65)]">
            From Salem to the world—Divinoft Developers crafts full-stack digital experiences using
            Python, Django, and the MERN stack. We fuse research-driven strategy, award-worthy design,
            and India-ready SEO to help ambitious brands accelerate their growth online.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.3em] text-[rgba(255,255,255,0.64)]">Studio</h4>
            <address className="mt-4 space-y-2 not-italic text-[rgba(229,232,255,0.7)]">
              <p>Avinashi Road, Fairlands</p>
              <p>Salem, Tamil Nadu 636001</p>
              <p>India</p>
            </address>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.3em] text-[rgba(255,255,255,0.64)]">Explore</h4>
            <ul className="mt-4 space-y-2 text-[rgba(229,232,255,0.7)]">
              <li>
                <Link href="#services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="transition hover:text-white">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#projects" className="transition hover:text-white">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="#seo" className="transition hover:text-white">
                  SEO for India
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.3em] text-[rgba(255,255,255,0.64)]">Contact</h4>
            <ul className="mt-4 space-y-2 text-[rgba(229,232,255,0.7)]">
              <li>
                <a href="tel:+919080012345" className="transition hover:text-white">
                  +91 90800 12345
                </a>
              </li>
              <li>
                <a href="mailto:hello@divinoft.com" className="transition hover:text-white">
                  hello@divinoft.com
                </a>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/divinoft-developers" className="transition hover:text-white">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/divinoftdevelopers" className="transition hover:text-white">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(113,246,249,0.1)] bg-[rgba(4,8,18,0.85)] py-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-[rgba(229,232,255,0.5)] md:flex-row">
          <span>© {year} Divinoft Developers. All rights reserved.</span>
          <span>Serving startups, SMEs & enterprises across India.</span>
        </div>
      </div>
    </footer>
  );
}
