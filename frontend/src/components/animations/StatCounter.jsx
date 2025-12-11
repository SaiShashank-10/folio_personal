import React from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';

const StatCounter = ({ value, suffix = '', prefix = '', label, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white">
        <span>{prefix}</span>
        {isInView && (
          <CountUp
            start={0}
            end={value}
            duration={duration}
            separator=","
          />
        )}
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-light">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCounter;
