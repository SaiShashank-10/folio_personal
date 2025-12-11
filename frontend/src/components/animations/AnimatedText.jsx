import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  type = 'words', // 'words' | 'chars' | 'lines'
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  if (type === 'words') {
    const words = text.split(' ');
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`inline-flex flex-wrap ${className}`}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === 'chars') {
    const chars = text.split('');
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Default: single animation
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;
