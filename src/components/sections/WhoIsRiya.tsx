import { Reveal } from '@/components/motion/Reveal';

const energizes = [
  'messy problems',
  'building from scratch',
  'user feedback loops',
  'turning ideas into systems',
  'high-impact work',
];
const values = ['intent', 'originality', 'ownership', 'relationships', 'meaningful outcomes'];
const builtFor = ['Product Management', 'Founder’s Office', 'GTM & operator roles', 'systems thinking', 'experimentation'];

function Panel({ title, items, tone }: { title: string; items: string[]; tone: string }) {
  return (
    <div className={`rounded-[2rem] p-7 ${tone}`}>
      <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">{title}</div>
      <ul className="mt-5 space-y-2">
        {items.map((i) => (
          <li key={i} className="font-display text-xl leading-snug">{i}</li>
        ))}
      </ul>
    </div>
  );
}

export function WhoIsRiya() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <span className="pill bg-blush-soft text-foreground/70">A short introduction</span>
            </Reveal>
            <Reveal delay={0.1} as="h2" className="font-display mt-5 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1] tracking-tight">
              Who is <em className="italic text-coral">Riya</em>?
            </Reveal>
            <Reveal delay={0.2} className="mt-7 max-w-md text-pretty text-base leading-relaxed text-foreground/70">
              She’s always been a doer — from state-level basketball to leading 500-person events, from running 0→1 ventures to designing decision systems inside India’s largest power utility. A jack of many trades who now channels that range into focused, high-impact product and operator work.
            </Reveal>
            <Reveal delay={0.3} className="mt-8 rounded-3xl border border-border/60 bg-white/60 p-6 backdrop-blur">
              <p className="font-display text-2xl italic leading-snug">
                “I don’t complete tasks — I turn them into something impactful and memorable.”
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:col-span-7 md:grid-cols-2">
            <Reveal delay={0.05}><Panel title="What energizes me" items={energizes} tone="bg-blush-soft" /></Reveal>
            <Reveal delay={0.15}><Panel title="What I value" items={values} tone="bg-sage" /></Reveal>
            <Reveal delay={0.25} className="md:col-span-2">
              <Panel title="What I'm built for" items={builtFor} tone="bg-lavender" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
