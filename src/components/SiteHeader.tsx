import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { label: 'Home',      to: '/#top' },
  { label: 'Work',      to: '/#work' },
  { label: 'Why Riya',  to: '/#why' },
  { label: 'Playground',to: '/#playground' },
  { label: 'Contact',   to: '/#contact' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (to: string) => (e: React.MouseEvent) => {
    if (pathname === '/' && to.startsWith('/#')) {
      e.preventDefault();
      const id = to.slice(2);
      const el = id === 'top' ? document.body : document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-cream/70 border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
          Riya<span className="text-coral">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={handleAnchor(l.to)}
              className="story-link text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost-soft hidden md:inline-flex !px-4 !py-2 !text-xs"
          >
            LinkedIn
          </a>
          <a href="#contact" onClick={handleAnchor('/#contact')} className="btn-soft !px-4 !py-2 !text-xs">
            Resume ↗
          </a>
        </div>
      </div>
    </motion.header>
  );
}
