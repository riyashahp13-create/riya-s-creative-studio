import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/motion/Reveal';

import tataFuel from '@/assets/proj-tata-fuel.jpg';
import tataApc from '@/assets/proj-tata-apc.jpg';
import tataTrade from '@/assets/proj-tata-trading.jpg';
import asli from '@/assets/proj-asli.jpg';
import bellybox from '@/assets/proj-bellybox.jpg';
import miniorange from '@/assets/proj-miniorange.jpg';

export const projects = [
  {
    slug: 'tata-fuel-cost',
    title: 'Tata Power — Fuel Cost Optimization',
    tagline: 'Built data-driven frameworks that enabled ₹10–12 Cr annual fuel cost optimization.',
    tags: ['Decision Systems', 'Business Impact'],
    image: tataFuel,
    bg: 'bg-beige',
  },
  {
    slug: 'tata-apc',
    title: 'Tata Power — APC Reduction',
    tagline: 'Built system intelligence that reduced APC and unlocked sellable capacity.',
    tags: ['Operations Intelligence'],
    image: tataApc,
    bg: 'bg-blush-soft',
  },
  {
    slug: 'tata-trading',
    title: 'Tata Power — Power Trading & Price Prediction',
    tagline: 'Built decision support for smarter power-selling and better market response.',
    tags: ['Product Thinking', 'Revenue Strategy'],
    image: tataTrade,
    bg: 'bg-sage',
  },
  {
    slug: 'asli-world',
    title: 'Asli World',
    tagline: 'Built and scaled a 0→1 D2C brand through end-to-end product, funnel, vendor and growth ownership.',
    tags: ['0→1 D2C', 'Product · Growth · Ops'],
    image: asli,
    bg: 'bg-lavender',
    featured: true,
  },
  {
    slug: 'bellybox',
    title: 'BellyBox',
    tagline: 'Helped turn an unstructured food idea into a working pilot with users, vendors and operations.',
    tags: ['Early-stage Marketplace', 'Ops + PM'],
    image: bellybox,
    bg: 'bg-beige',
  },
  {
    slug: 'miniorange',
    title: 'MiniOrange',
    tagline: 'Worked where product understanding, growth and client execution met.',
    tags: ['Product · Growth · Clients'],
    image: miniorange,
    bg: 'bg-pale-blue',
  },
] as const;

export type Project = typeof projects[number];

export function SelectedWork() {
  return (
    <section id="work" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">( Collection of handpicked projects )</div>
          <h2 className="font-display mt-4 text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.95] tracking-tight">
            Selected <em className="italic text-coral">work</em>.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-12">
          {projects.map((p, i) => (
            <StaggerItem
              key={p.slug}
              className={
                p.featured ? 'md:col-span-8' :
                i === 0 || i === 1 ? 'md:col-span-6' :
                'md:col-span-4'
              }
            >
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className={`card-tilt group relative block overflow-hidden rounded-[2rem] ${project.bg} ring-soft`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-6 md:p-7">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="pill bg-white/80 text-foreground/70 ring-soft">{t}</span>
          ))}
        </div>
        <h3 className="font-display text-2xl font-medium leading-tight md:text-[1.65rem]">
          {project.title}
        </h3>
        <p className="text-sm text-foreground/65 md:text-[15px]">{project.tagline}</p>
        <div className="mt-2 inline-flex items-center gap-1 text-sm font-medium">
          Read case study
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
