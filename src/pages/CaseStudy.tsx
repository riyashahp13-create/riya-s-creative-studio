import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/sections/Footer';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { caseStudies, orderedCaseStudies, type CaseStudy, type Section } from '@/data/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const cs = slug ? caseStudies[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (cs) document.title = `${cs.title} — Riya Shah`;
  }, [cs]);

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
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className={`case-hero-wash relative overflow-hidden ${cs.heroBg} pt-32 pb-16 md:pt-40 md:pb-24`}>
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Link to="/#work" className="story-link text-sm font-medium text-foreground/62">← Back to work</Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <span key={tag} className="pill bg-white/72 text-foreground/70 ring-soft backdrop-blur">
              {tag}
            </span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="font-display mt-6 max-w-5xl text-[clamp(2.6rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-tight"
        >
          {cs.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-foreground/74 md:text-xl"
        >
          {cs.thesis}
        </motion.p>

        <StaggerGroup className="mt-9 grid gap-3 md:grid-cols-3">
          {cs.facts.map((fact) => (
            <StaggerItem key={fact.label}>
              <div className="h-full rounded-3xl bg-white/68 p-5 shadow-[var(--shadow-soft)] ring-soft backdrop-blur">
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">{fact.label}</div>
                <div className="mt-2 font-display text-lg font-medium leading-tight">{fact.value}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="mt-12 overflow-hidden rounded-[2rem] bg-white/50 shadow-[var(--shadow-lift)] ring-1 ring-foreground/5"
        >
          <img src={cs.image} alt={cs.title} className="aspect-[16/9] w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

function CaseBody({ cs }: { cs: CaseStudy }) {
  return (
    <section className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[260px_1fr]">
        <Reveal className="hidden lg:block">
          <aside className="sticky top-28">
            <div className="rounded-[1.5rem] bg-white/60 p-5 shadow-[var(--shadow-soft)] ring-soft backdrop-blur">
              <div className="text-xs uppercase tracking-[0.22em] text-foreground/45">Case sections</div>
              <nav className="mt-4 space-y-2">
                {cs.sections.map((section, index) => (
                  <a
                    key={section.heading}
                    href={`#${sectionId(section.heading)}`}
                    className="group flex items-start gap-3 rounded-2xl px-3 py-2 text-sm text-foreground/62 transition-colors hover:bg-blush-soft/65 hover:text-foreground"
                  >
                    <span className="font-display text-base text-coral/80">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.heading}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </Reveal>

        <div className="space-y-7">
          {cs.sections.map((section, index) => (
            <CaseSection
              key={section.heading}
              section={section}
              index={index}
              metrics={section.heading === 'Outcome Metrics' ? cs.outcome.metrics : undefined}
              note={section.heading === 'Outcome Metrics' ? cs.outcome.note : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseSection({
  section,
  index,
  metrics,
  note,
}: {
  section: Section;
  index: number;
  metrics?: CaseStudy['outcome']['metrics'];
  note?: string;
}) {
  const isProof = section.heading === 'What this proves';

  return (
    <Reveal
      as="section"
      id={sectionId(section.heading)}
      className={`case-section-card rounded-[2rem] p-6 shadow-[var(--shadow-soft)] ring-soft md:p-8 ${
        isProof ? 'bg-foreground text-background' : 'bg-white/70'
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className={`text-xs uppercase tracking-[0.25em] ${isProof ? 'text-background/52' : 'text-foreground/45'}`}>
            {String(index + 1).padStart(2, '0')}
          </div>
          <h2 className="font-display mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-tight">
            {section.heading}
          </h2>
        </div>
      </div>

      <div className={`mt-5 space-y-4 text-pretty text-[16.5px] leading-relaxed ${isProof ? 'text-background/78' : 'text-foreground/78'}`}>
        {section.body.map((block, blockIndex) =>
          Array.isArray(block) ? (
            <ul key={blockIndex} className="grid gap-2 sm:grid-cols-2">
              {block.map((item) => (
                <li
                  key={item}
                  className={`rounded-2xl p-4 text-sm leading-relaxed ${
                    isProof ? 'bg-white/10 text-background/78' : 'bg-cream/70 text-foreground/72'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p key={blockIndex}>{block}</p>
          ),
        )}
      </div>

      {metrics && (
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-foreground p-5 text-background shadow-[var(--shadow-soft)]">
              <div className="font-display text-3xl font-medium leading-none">{metric.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-background/60">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {note && <p className="mt-5 text-sm leading-relaxed text-foreground/55">{note}</p>}
    </Reveal>
  );
}

function NextCase({ current }: { current: string }) {
  const index = orderedCaseStudies.findIndex((cs) => cs.slug === current);
  const next = orderedCaseStudies[(index + 1) % orderedCaseStudies.length];

  return (
    <section className="bg-beige/45 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-foreground/55">Next case study</div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to={`/project/${next.slug}`}
            className="group mt-3 flex flex-wrap items-end justify-between gap-6 border-b border-foreground/15 pb-6 transition-colors hover:border-foreground/40"
          >
            <div>
              <h3 className="font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-tight">
                {next.title}
              </h3>
              <p className="mt-3 max-w-xl text-foreground/62">{next.preview}</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              Read next
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
