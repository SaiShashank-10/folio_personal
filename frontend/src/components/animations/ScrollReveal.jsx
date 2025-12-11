import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  className = '',
  direction = 'up', // 'up' | 'down' | 'left' | 'right'
  delay = 0,
  duration = 0.6,
  useGsap = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  };

  useEffect(() => {
    if (useGsap && ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0, x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, [useGsap, direction, duration, delay]);

  if (useGsap) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
