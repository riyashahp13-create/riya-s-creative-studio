import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/motion/Reveal';
import { orderedCaseStudies, type CaseStudy } from '@/data/caseStudies';

const projects = orderedCaseStudies;
export type Project = CaseStudy;

export function SelectedWork() {
  return (
    <section id="work" className="work-ambient relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">( Case-study previews )</div>
          <h2 className="font-display mt-4 text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.95] tracking-tight">
            Selected <em className="italic text-coral">work</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-foreground/65">
            Skimmable proof of how Riya thinks: problem, role, decisions, stakeholders and outcomes in one glance.
          </p>
        </Reveal>

        <StaggerGroup amount={0.02} className="mt-16 grid gap-6 md:grid-cols-12">
          {projects.map((project, index) => (
            <StaggerItem key={project.slug} className={getGridClass(project, index)}>
              <ProjectCard project={project} priority={index < 2} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function getGridClass(project: Project, index: number) {
  if (project.featured) return 'md:col-span-12 lg:col-span-8';
  if (index === 1) return 'md:col-span-12 lg:col-span-4';
  if (index === 2 || index === 3) return 'md:col-span-6';
  return 'md:col-span-6 lg:col-span-4';
}

function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const reduceMotion = useReducedMotion();
  const hoverState = reduceMotion
    ? undefined
    : { y: -10, rotateX: project.featured ? 1.1 : 0.8, rotateY: project.featured ? -1 : 1.2 };

  return (
    <motion.article
      whileHover={hoverState}
      transition={{ type: 'spring', stiffness: 230, damping: 24 }}
      className="h-full [perspective:1200px]"
    >
      <Link
        to={`/project/${project.slug}`}
        className={`premium-work-card launch-panel group relative flex h-full flex-col overflow-hidden rounded-[2.25rem] ${project.cardBg} ring-soft`}
      >
        <div className="flex flex-1 flex-col p-5 md:p-7">
          <div className={`grid gap-3 ${project.featured ? 'md:grid-cols-3' : ''}`}>
            {project.cardMetrics.slice(0, 3).map((metric, index) => (
              <div
                key={metric}
                className={`launch-metric rounded-[1.35rem] bg-white/58 p-4 shadow-[var(--shadow-soft)] ring-1 ring-white/70 backdrop-blur ${
                  project.featured && index === 0 ? 'md:col-span-1' : ''
                }`}
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/42">Proof</div>
                <div className={`font-display mt-2 font-medium leading-[0.95] tracking-tight ${project.featured ? 'text-[clamp(1.55rem,3vw,2.65rem)]' : 'text-[clamp(1.45rem,2.6vw,2.2rem)]'}`}>
                  {metric}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-7 grid flex-1 gap-6 ${project.featured ? 'lg:grid-cols-[0.95fr_1.05fr]' : ''}`}>
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="pill bg-white/75 text-foreground/68 ring-soft">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/52">Story</p>
                <h3 className="font-display mt-2 text-3xl font-medium leading-[1.02] tracking-tight md:text-[2.1rem]">
                  {project.title}
                </h3>
              </div>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/68 md:text-[15px]">
                {project.preview}
              </p>

              <div className="mt-5 rounded-[1.25rem] bg-white/43 p-4 ring-1 ring-white/62">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/45">Role</div>
                <div className="mt-1 text-sm font-medium leading-snug text-foreground/82">{project.role}</div>
              </div>

              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background shadow-[var(--shadow-soft)] transition-colors group-hover:bg-coral">
                  Read case study
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </div>

            <div className={`relative min-h-[220px] overflow-hidden rounded-[1.75rem] bg-white/35 shadow-[var(--shadow-soft)] ring-1 ring-white/65 ${project.featured ? 'lg:min-h-full' : ''}`}>
              <motion.img
                src={project.image}
                alt={project.title}
                loading={priority ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-white/20 opacity-80 transition-opacity duration-500 group-hover:opacity-55" />
              <div className="absolute left-4 top-4 rounded-full bg-white/82 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/65 shadow-[var(--shadow-soft)] backdrop-blur">
                {project.featured ? 'Featured launch' : project.tags[0]}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
