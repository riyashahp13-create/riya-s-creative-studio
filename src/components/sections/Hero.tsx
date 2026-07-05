import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { type PointerEvent, type ReactNode } from 'react';
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

const spring = { stiffness: 170, damping: 22, mass: 0.45 };

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const yCard = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -34]);
  const yFrame = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -86]);
  const yPortrait = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -54]);
  const yChipLeft = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -112]);
  const yChipRight = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -72]);
  const ease = [0.16, 1, 0.3, 1] as const;

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(45);
  const rotateX = useSpring(tiltX, spring);
  const rotateY = useSpring(tiltY, spring);
  const glowLeft = useTransform(glowX, (value) => `${value}%`);
  const glowTop = useTransform(glowY, (value) => `${value}%`);

  const handlePortraitMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(py * -8);
    tiltY.set(px * 8);
    glowX.set((px + 0.5) * 100);
    glowY.set((py + 0.5) * 100);
  };

  const resetPortraitTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
    glowX.set(50);
    glowY.set(45);
  };

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20">
      <div className="absolute inset-0 -z-10 stripe-bg opacity-90" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream/30 via-cream/60 to-cream" aria-hidden />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-8 md:px-10">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="font-display mt-5 text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight"
          >
            Not here to <em className="italic text-coral">fit in</em>.<br />
            Here to{' '}
            <span className="relative inline-block">
              build differently.
              <svg className="absolute -bottom-3 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none">
                <path d="M2 8 C 60 0, 120 14, 180 6 S 290 4, 298 8" stroke="hsl(var(--blush))" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg"
          >
            I build at the intersection of <strong className="font-medium text-foreground">product, growth, systems</strong> and business impact. From decision systems at Tata Power to 0→1 ventures like Asli World and BellyBox, I’m drawn to messy problems, meaningful ownership, and work that actually changes outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticLink href="#work" className="btn-soft magnetic-cta">View selected work →</MagneticLink>
            <MagneticLink href="#contact" className="btn-ghost-soft magnetic-cta">Resume</MagneticLink>
            <MagneticLink href="mailto:tbm26riya.shah@mastersunion.org" className="btn-ghost-soft magnetic-cta">
              Connect
            </MagneticLink>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {proofs.map((proof) => (
              <li key={proof} className="pill bg-white/70 ring-soft text-foreground/75">
                {proof}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative md:col-span-5">
          <motion.div
            style={{ y: yCard, rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            onPointerMove={handlePortraitMove}
            onPointerLeave={resetPortraitTilt}
            className="hero-glass-card relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/35 p-6 shadow-[0_30px_90px_hsl(350_100%_70%/0.18)] backdrop-blur-2xl"
          >
            <motion.div
              className="hero-pointer-glow"
              style={{ left: glowLeft, top: glowTop }}
              aria-hidden
            />

            <motion.img
              src={heroFrame}
              alt=""
              aria-hidden
              style={{ y: yFrame }}
              className="pointer-events-none absolute left-[9%] top-[3%] h-[78%] w-[82%] object-contain opacity-95 drop-shadow-[0_18px_35px_hsl(0_0%_0%/0.08)]"
            />

            <motion.div
              style={{ y: yPortrait }}
              className="absolute left-[21%] top-[18%] aspect-square w-[58%] overflow-hidden rounded-full bg-white ring-4 ring-white/90 shadow-[0_24px_70px_hsl(0_0%_0%/0.18)]"
            >
              <img src={portrait} alt="Portrait of Riya Shah" className="h-full w-full object-cover" />
            </motion.div>

            <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/60 bg-white/55 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/45">Product · Systems · Growth</div>
              <div className="mt-1 font-display text-2xl font-medium leading-none">Riya Shah</div>
              <div className="mt-2 text-sm leading-snug text-foreground/62">High-agency operator for PM and Founder’s Office roles.</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yChipLeft }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.8 }}
            className="animate-drift absolute -left-4 top-8 hidden rounded-2xl border border-white/70 bg-white/78 px-4 py-3 shadow-[0_18px_45px_hsl(0_0%_0%/0.08)] backdrop-blur-xl md:block"
          >
            <div className="text-xs uppercase tracking-widest text-foreground/50">Tata Power</div>
            <div className="font-display text-lg">₹10–12 Cr enabled</div>
          </motion.div>
          <motion.div
            style={{ y: yChipRight }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.95 }}
            className="animate-drift-slow absolute -right-3 bottom-12 hidden rounded-2xl border border-white/70 bg-white/78 px-4 py-3 shadow-[0_18px_45px_hsl(0_0%_0%/0.08)] backdrop-blur-xl md:block"
          >
            <div className="text-xs uppercase tracking-widest text-foreground/50">Asli World</div>
            <div className="font-display text-lg">7× ROAS</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MagneticLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(px * 16);
    y.set(py * 10);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </motion.a>
  );
}
