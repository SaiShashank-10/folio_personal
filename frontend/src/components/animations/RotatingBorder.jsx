import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const RotatingBorder = ({ children, className = '' }) => {
  const borderRef = useRef(null);

  useEffect(() => {
    if (borderRef.current) {
      gsap.to(borderRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Rotating gradient border */}
      <div
        ref={borderRef}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(0, 0, 0, 0.1) 60deg, rgba(0, 0, 0, 0.3) 120deg, rgba(0, 0, 0, 0.1) 180deg, transparent 240deg, transparent 360deg)',
          padding: '4px',
        }}
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-black" />
      </div>

      {/* Dark mode rotating border */}
      <div
        className="absolute inset-0 rounded-full dark:block hidden"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(255, 255, 255, 0.1) 60deg, rgba(255, 255, 255, 0.3) 120deg, rgba(255, 255, 255, 0.1) 180deg, transparent 240deg, transparent 360deg)',
          padding: '4px',
        }}
      >
        <div className="w-full h-full rounded-full bg-black" />
      </div>

      {/* Static border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 rounded-full border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden"
      >
        {children}
      </motion.div>

      {/* Decorative dots */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
      </div>
      <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
        <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
      </div>
      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
        <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
      </div>
    </div>
  );
};

export default RotatingBorder;
