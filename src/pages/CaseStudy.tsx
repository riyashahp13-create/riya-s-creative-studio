import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/sections/Footer';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { caseStudies, type CaseStudy } from '@/data/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const cs = slug ? caseStudies[slug] : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!cs) return <Navigate to="/" replace />;

  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <CaseHero cs={cs} />
      <CaseBody cs={cs} />
      <NextCase current={cs.slug} />
      <Footer />
    </main>
  );
}

function CaseHero({ cs }: { cs: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} className={`relative overflow-hidden ${cs.heroBg} pt-32 pb-16 md:pt-40 md:pb-24`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Link to="/#work" className="story-link text-sm text-foreground/60">← Back to work</Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {cs.tags.map((t) => (
            <span key={t} className="pill bg-white/70 ring-soft text-foreground/70">{t}</span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="font-display mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-tight"
        >
          {cs.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mt-6 max-w-2xl text-pretty text-lg text-foreground/75 md:text-xl"
        >
          {cs.thesis}
        </motion.p>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="mt-12 overflow-hidden rounded-[2rem] ring-1 ring-foreground/5"
        >
          <img src={cs.image} alt={cs.title} className="aspect-[16/9] w-full object-cover" />
        </motion.div>

        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-3">
          {cs.facts.map((f) => (
            <StaggerItem key={f.label}>
              <div className="rounded-2xl bg-white/70 p-5 ring-soft backdrop-blur">
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">{f.label}</div>
                <div className="mt-1 font-display text-lg leading-tight">{f.value}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function CaseBody({ cs }: { cs: CaseStudy }) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl space-y-16 px-6 md:px-10">
        {cs.sections.map((s) => (
          <Reveal key={s.heading}>
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/45">{s.kicker ?? 'Section'}</div>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-tight">
              {s.heading}
            </h2>
            <div className="mt-5 space-y-4 text-pretty text-[17px] leading-relaxed text-foreground/80">
              {s.body.map((p, i) => (
                Array.isArray(p)
                  ? (
                    <ul key={i} className="space-y-2 pl-1">
                      {p.map((li) => (
                        <li key={li} className="flex gap-3">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-coral" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )
                  : <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        ))}

        {cs.outcome && (
          <Reveal className="rounded-[2rem] bg-foreground p-8 text-background md:p-12">
            <div className="text-xs uppercase tracking-[0.25em] text-background/55">Outcome</div>
            <h3 className="font-display mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight">
              {cs.outcome.headline}
            </h3>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 md:grid-cols-3">
              {cs.outcome.metrics.map((m) => (
                <div key={m.label} className="bg-foreground p-6">
                  <div className="font-display text-3xl font-medium">{m.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-background/55">{m.label}</div>
                </div>
              ))}
            </div>
            {cs.outcome.note && <p className="mt-6 text-sm text-background/65">{cs.outcome.note}</p>}
          </Reveal>
        )}

        <Reveal className="grid gap-6 rounded-[2rem] bg-blush-soft p-8 md:grid-cols-2 md:p-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/55">PM lens</div>
            <p className="mt-3 text-pretty text-[17px] leading-relaxed">{cs.lenses.pm}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/55">Founder’s Office lens</div>
            <p className="mt-3 text-pretty text-[17px] leading-relaxed">{cs.lenses.fo}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NextCase({ current }: { current: string }) {
  const order = Object.keys(caseStudies);
  const idx = order.indexOf(current);
  const next = caseStudies[order[(idx + 1) % order.length]];
  return (
    <section className="bg-beige/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-foreground/55">Next</div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to={`/project/${next.slug}`}
            className="group mt-3 flex flex-wrap items-end justify-between gap-6 border-b border-foreground/15 pb-6 transition-colors hover:border-foreground/40"
          >
            <h3 className="font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-tight">
              {next.title}
            </h3>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              Read next
              <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
