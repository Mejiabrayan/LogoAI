'use client';
import { motion } from 'framer-motion';

import React from 'react';

const Heading = () => {
  const headings = [`Create a logo that's yours`];

  const staggeringLetters = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div>
      {headings.map((heading, index) => (
        <motion.h1
          key={index}
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-[#333333]'
          variants={staggeringLetters}
          initial='initial'
          animate='animate'
          whileInView={{ scale: 1 }}
        >
          {Array.from(heading).map((letter, index) => (
            <motion.span
              key={index}
              variants={staggeringLetters}
              className='inline-block'
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
      ))}
    </div>
  );
};

export default Heading;
