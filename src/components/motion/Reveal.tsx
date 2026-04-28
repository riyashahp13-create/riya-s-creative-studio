import { motion, type MotionProps, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};

interface RevealProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'header' | 'article' | 'li' | 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function Reveal({ children, className, delay = 0, as = 'div', ...rest }: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function StaggerGroup({ children, className, amount = 0.15 }: { children: ReactNode; className?: string; amount?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
