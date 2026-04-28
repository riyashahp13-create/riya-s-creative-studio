import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';

const items = [
  { when: 'Oct ’25 — Present', what: 'BellyBox', sub: 'Subscription-first tiffin marketplace · early pilot', tone: 'bg-blush-soft' },
  { when: 'Jun ’25 — Present', what: 'Asli World', sub: 'Product Lead · 0→1 D2C · Rank 8/120', tone: 'bg-lavender' },
  { when: '2025 — 2026',       what: 'Masters’ Union', sub: 'PGP in Tech & Business Mgmt (MBA) · Gurugram', tone: 'bg-sage' },
  { when: 'Jul ’22 — Aug ’24', what: 'Tata Power', sub: 'Lead Engineer · Web Dev & Stakeholder Solutions · Mumbai', tone: 'bg-beige' },
  { when: 'Apr ’22 — Jun ’22', what: 'MiniOrange', sub: 'Business Analyst Intern · Pune', tone: 'bg-pale-blue' },
  { when: 'Jan ’22 — Feb ’22', what: 'Fresh VNF', sub: 'Software Engineer Intern · Mumbai', tone: 'bg-blush-soft' },
  { when: '2018 — 2022',       what: 'Symbiosis (SIT)', sub: 'B.Tech IT · Garba Committee Head · Football 2nd place', tone: 'bg-lavender' },
];

export function Timeline() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <span className="pill bg-blush-soft">A short story, in time</span>
          <h2 className="font-display mt-4 text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[1] tracking-tight">
            How I got <em className="italic text-coral">here</em>.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 space-y-3">
          {items.map((it) => (
            <StaggerItem key={it.what + it.when}>
              <div className={`card-tilt grid grid-cols-12 items-center gap-4 rounded-3xl ${it.tone} p-5 md:p-6`}>
                <div className="col-span-12 md:col-span-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                  {it.when}
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="font-display text-2xl font-medium leading-tight">{it.what}</div>
                  <div className="mt-1 text-sm text-foreground/65">{it.sub}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
