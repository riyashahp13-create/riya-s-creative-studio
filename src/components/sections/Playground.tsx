import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import startup from '@/assets/play-startup.jpg';
import sports from '@/assets/play-sports.jpg';
import garba from '@/assets/play-garba.jpg';
import lions from '@/assets/play-lions.jpg';

const cards = [
  {
    title: 'SuperFuel AI',
    sub: 'Startup Weekend Winner',
    body: '1st of 100+ teams. ₹25K prize. Built an AI assistant for Amazon sellers analyzing 90+ metrics into actionable insights.',
    image: startup,
    tone: 'bg-blush-soft',
    chip: '₹25K · 1 of 100+',
  },
  {
    title: 'Samay Raina · 48-hr build',
    sub: 'Top 3 of 300+',
    body: 'Designed branding, packaging and a live D2C merch site in under 48 hours. Speed + creativity, end-to-end.',
    image: startup,
    tone: 'bg-lavender',
    chip: 'Top 3 · 300+ teams',
  },
  {
    title: 'On the court',
    sub: 'Sports & competition',
    body: 'State-level basketball — Gujarat representative (25+ teams). 2nd place inter-college football (10+ teams).',
    image: sports,
    tone: 'bg-sage',
    chip: 'State level',
  },
  {
    title: 'Garba Committee',
    sub: 'Head, SIT Pune',
    body: 'Led choreography & coordination for an event with 500+ attendees. Public leadership, on-stage energy.',
    image: garba,
    tone: 'bg-beige',
    chip: '500+ attendees',
  },
  {
    title: 'Lions Club Surat Solitaire',
    sub: 'Digital literacy',
    body: 'Led 8 digital literacy workshops; mentored 20+ female students for career readiness.',
    image: lions,
    tone: 'bg-pale-blue',
    chip: '8 workshops · 20+ mentees',
  },
];

export function Playground() {
  return (
    <section id="playground" className="relative bg-beige/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">( Personality, off the resume )</div>
            <h2 className="font-display mt-3 text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-tight">
              my <em className="italic text-coral">Playground</em>.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-foreground/70">
            The unfair-advantage stuff — competitions, leadership, sport. The proof that range isn’t a buzzword.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-12">
          {cards.map((c, i) => (
            <StaggerItem
              key={c.title}
              className={i === 0 ? 'md:col-span-7' : i === 1 ? 'md:col-span-5' : i === 2 ? 'md:col-span-4' : i === 3 ? 'md:col-span-4' : 'md:col-span-4'}
            >
              <article className={`card-tilt group h-full overflow-hidden rounded-[2rem] ${c.tone}`}>
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">{c.sub}</span>
                    <span className="pill bg-white/80 text-[11px] ring-soft">{c.chip}</span>
                  </div>
                  <h3 className="font-display mt-3 text-2xl font-medium leading-tight">{c.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{c.body}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
