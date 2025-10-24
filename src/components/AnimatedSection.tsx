'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : {
        hidden: { opacity: 0, y: 80, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            mass: 1.2
          }
        }
      };

  return (
    <motion.section
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
    >
      {children}
    </motion.section>
  );
}
