import { StaggerGroup, StaggerItem, Reveal } from '@/components/motion/Reveal';

const stats = [
  { v: '₹10–12 Cr', l: 'Cost savings enabled · Tata Power' },
  { v: '₹2 Cr',      l: 'Annual loss reduction' },
  { v: '₹7–8 Cr',    l: 'Output impact enabled' },
  { v: '7×',         l: 'ROAS · Asli World' },
  { v: '670K+',      l: 'Reach · Asli World ads' },
  { v: '+18%',       l: 'Checkout conversion' },
  { v: '−22%',       l: 'Cart drop-offs' },
  { v: '30+',        l: 'BellyBox user interviews' },
  { v: '3×',         l: 'Star of the Month · Tata' },
  { v: '+10%',       l: 'SEO rankings · MiniOrange' },
];

export function ProofStrip() {
  return (
    <section className="relative bg-foreground text-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="pill bg-white/10 text-background/80">Proof, in numbers</span>
          <h2 className="font-display mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1] tracking-tight">
            Outcomes I’ve helped <em className="italic text-blush">drive</em>.
          </h2>
          <p className="mt-4 max-w-xl text-background/65">
            System-enabled outcomes, measured. Tata numbers reflect business impact unlocked by systems I designed and drove with cross-functional teams.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/15 sm:grid-cols-2 md:grid-cols-5">
          {stats.map((s) => (
            <StaggerItem key={s.l} className="bg-foreground p-6 md:p-8">
              <div className="font-display text-3xl font-medium md:text-4xl">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-background/55">{s.l}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
