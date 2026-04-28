import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';

const panels = [
  {
    label: 'Product Management',
    title: 'Build with users at the center.',
    proof: [
      'Tata trading & price-prediction strategy',
      'BellyBox interviews + subscription logic',
      'Asli funnel optimization & A/B tests',
      'MiniOrange growth + content strategy',
    ],
    skills: ['User Research', 'A/B Testing', 'Roadmap', 'Metrics', 'Figma / UX'],
    bg: 'bg-blush-soft',
  },
  {
    label: 'Founder’s Office / Chief of Staff',
    title: 'Move outcomes through ambiguity.',
    proof: [
      'Tata Power: multi-stakeholder, multi-plant systems',
      'BellyBox: end-to-end pilot operations',
      'Asli World: full-stack ownership',
      'Startup Weekend: 0→1 in 54 hours',
    ],
    skills: ['Stakeholder Mgmt', 'Cross-functional', 'Business Thinking', 'Founder Ownership'],
    bg: 'bg-sage',
  },
  {
    label: 'Operator · Growth · Special Projects',
    title: 'Ship the messy, measurable thing.',
    proof: [
      'Asli: ads, funnel, vendors, ops',
      'Tata: systems & decision dashboards',
      'BellyBox: vendor + rider operations',
      'Lions Club: 8 workshops, 20+ mentees',
    ],
    skills: ['GTM', 'Experimentation', 'Operations', 'Systems Thinking', 'High-agency'],
    bg: 'bg-lavender',
  },
];

export function WhyRiyaFits() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <span className="pill bg-beige text-foreground/70">Where I fit</span>
          <h2 className="font-display mt-5 text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1] tracking-tight">
            Why this works for <em className="italic text-coral">PM</em> & <em className="italic text-coral">Founder’s Office</em>.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {panels.map((p) => (
            <StaggerItem key={p.label}>
              <article className={`card-tilt h-full rounded-[2rem] p-7 ${p.bg}`}>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">{p.label}</div>
                <h3 className="font-display mt-4 text-[1.7rem] font-medium leading-tight">{p.title}</h3>
                <ul className="mt-5 space-y-2.5 text-[15px] text-foreground/75">
                  {p.proof.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.skills.map((s) => (
                    <span key={s} className="pill bg-white/70 text-[11px] text-foreground/70 ring-soft">{s}</span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
