import { Reveal } from '@/components/motion/Reveal';

const phrases = [
  'Building systems that move the needle',
  'Turning ambiguity into motion',
  'Running experiments',
  'Understanding users',
  'Creating with intent',
  'Making ideas feel real',
  'Solving messy problems',
  'Blending data, product & execution',
];

export function WhatILove() {
  return (
    <section className="relative overflow-hidden bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <Reveal className="text-xs uppercase tracking-[0.25em] text-foreground/50">
          What I love doing
        </Reveal>
        <ul className="mt-10 space-y-3 md:space-y-5">
          {phrases.map((p, i) => (
            <Reveal
              key={p}
              delay={i * 0.06}
              as="li"
              className="font-display text-[clamp(2rem,6vw,5.5rem)] font-medium leading-[1.05] tracking-tight"
            >
              {i % 2 === 0 ? <span>{p}</span> : <em className="italic text-coral/90">{p}</em>}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
