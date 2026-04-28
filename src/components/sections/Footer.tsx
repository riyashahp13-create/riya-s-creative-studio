import { Marquee } from '@/components/Marquee';
import { Reveal } from '@/components/motion/Reveal';

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-pale-blue/70 via-lavender to-blush-soft pt-24 pb-10">
        <Marquee
          items={['Reach out', 'Reach out', 'Reach out', 'Reach out', 'Reach out', 'Reach out']}
          className="border-y border-foreground/10 py-6 text-foreground"
          separator="—"
        />

        <div className="mx-auto mt-20 max-w-5xl px-6 text-center md:px-10">
          <Reveal>
            <span className="pill bg-white/70 ring-soft">Let’s talk</span>
          </Reveal>
          <Reveal delay={0.1} as="h2" className="font-display mt-6 text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tight">
            Let’s build something <em className="italic text-coral">meaningful</em>.
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="mailto:tbm26riya.shah@mastersunion.org"
              className="font-display mt-10 inline-block text-[clamp(1.5rem,4vw,2.75rem)] font-medium leading-tight underline decoration-foreground/30 underline-offset-[12px] hover:decoration-foreground"
            >
              tbm26riya.shah@mastersunion.org
            </a>
          </Reveal>
          <Reveal delay={0.3} className="mt-4 text-foreground/65">
            I always love seeing emails pop up in my inbox.
          </Reveal>

          <Reveal delay={0.4} className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a className="btn-soft" href="mailto:tbm26riya.shah@mastersunion.org">Email Riya</a>
            <a className="btn-ghost-soft" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn-ghost-soft" href="#top">Resume</a>
            <a className="btn-ghost-soft" href="https://wa.me/916354227873" target="_blank" rel="noreferrer">WhatsApp</a>
          </Reveal>
        </div>

        <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.2em] text-foreground/55 md:flex-row md:px-10">
          <div>© {new Date().getFullYear()} Riya Shah</div>
          <div className="hidden md:block">Product · Founder’s Office · Operator</div>
          <div>Designed & built with intent.</div>
        </div>
      </div>
    </footer>
  );
}
