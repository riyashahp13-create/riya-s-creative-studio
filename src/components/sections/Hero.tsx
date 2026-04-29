import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroFrame from '@/assets/hero-frame.png';
import portrait from '@/assets/riya-portrait.jpg';

const proofs = [
  '₹10–12 Cr impact enabled',
  '₹2 Cr loss reduction',
  '7x ROAS · Asli World',
  '670K+ reach',
  '30+ user interviews',
  '3× Star of the Month',
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yFrame = useTransform(scrollY, [0, 600], [0, -90]);
  const yPortrait = useTransform(scrollY, [0, 600], [0, -40]);
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20">
      {/* striped backdrop */}
      <div className="absolute inset-0 -z-10 stripe-bg opacity-90" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream/30 via-cream/60 to-cream" aria-hidden />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-12 md:gap-6 md:px-10">
        {/* Left: copy */}
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="font-display mt-5 text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight"
          >
            Not here to <em className="italic text-coral">fit in</em>.<br />
            Here to <span className="relative inline-block">
              build differently.
              <svg className="absolute -bottom-3 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none">
                <path d="M2 8 C 60 0, 120 14, 180 6 S 290 4, 298 8" stroke="hsl(var(--blush))" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg"
          >
            Riya builds at the intersection of <strong className="font-medium text-foreground">product, growth, systems</strong> and business impact. From decision systems at Tata Power to 0→1 ventures like Asli World and BellyBox — she’s drawn to messy problems, meaningful ownership, and work that actually changes outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="btn-soft">View selected work →</a>
            <a href="#contact" className="btn-ghost-soft">Resume</a>
            <a href="mailto:tbm26riya.shah@mastersunion.org" className="btn-ghost-soft">Connect</a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {proofs.map((p) => (
              <li key={p} className="pill bg-white/70 ring-soft text-foreground/75">{p}</li>
            ))}
          </motion.ul>
        </div>

        {/* Right: scalloped frame with portrait */}
        <div className="relative md:col-span-5">
          <motion.div
            style={{ y: yFrame }}
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <img src={heroFrame} alt="" aria-hidden className="absolute inset-0 h-full w-full object-contain" />
            <motion.div
              style={{ y: yPortrait }}
              className="absolute inset-[18%] overflow-hidden rounded-full ring-4 ring-white shadow-[0_20px_60px_hsl(350_100%_70%/0.25)]"
            >
              <img src={portrait} alt="Portrait of Riya Shah" className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Floating chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.8 }}
            className="animate-drift absolute -left-2 top-6 hidden rounded-2xl bg-white/85 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur md:block"
          >
            <div className="text-xs uppercase tracking-widest text-foreground/50">Tata Power</div>
            <div className="font-display text-lg">₹10–12 Cr enabled</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.95 }}
            className="animate-drift-slow absolute -right-2 bottom-10 hidden rounded-2xl bg-white/85 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur md:block"
          >
            <div className="text-xs uppercase tracking-widest text-foreground/50">Asli World</div>
            <div className="font-display text-lg">7× ROAS</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
