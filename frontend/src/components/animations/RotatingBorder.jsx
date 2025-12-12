import React from 'react';
import { motion } from 'framer-motion';

const RING_PADDING = 24; // larger gap so the ring sits outside the image
const SVG_SIZE = 506; // matches 2 * cx from the reference (cx=253)
const CX = 253;
const CY = 253;
const RADIUS = 250; // matches the provided design

const RotatingBorder = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated dashed ring (SVG) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          className="w-full h-full"
          style={{ padding: `${RING_PADDING}px` }}
        >
          <motion.circle
            cx={CX}
            cy={CY}
            r={RADIUS}
            fill="none"
            stroke="white"
            opacity="0.6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0', rotate: 0 }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '50% 50%' }}
          />
        </svg>
      </div>

      {/* Static border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 z-10 rounded-full border-2 border-neutral-100 dark:border-neutral-800 overflow-hidden"
        style={{ inset: `${RING_PADDING + 8}px` }} // extra inset keeps the image well clear of the ring
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
