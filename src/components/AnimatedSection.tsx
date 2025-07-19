import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: '-50px 0px -50px 0px'
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0
      }}
      transition={{
        duration: 0.6,
        delay: isInView ? delay : 0,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
