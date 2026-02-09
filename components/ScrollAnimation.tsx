'use client';

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<'div'>) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
