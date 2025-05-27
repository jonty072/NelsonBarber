'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const NelsonHero = () => {
  const title = "Feel your new Nelson style";
  const words = title.split(" ");

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-[70vh] min-h-[400px] md:h-[calc(100vh-80px)] max-h-[800px] flex items-center justify-center text-white font-serif overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://hair.nelson.themerex.net/wp-content/uploads/2019/08/image-10-copyright.jpg')", // Reference site barber image
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
      />
      {/* Gradient Overlay - inspired by DevFrend */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 30%, rgba(28,143,196,0.3) 70%, rgba(89,201,185,0.2) 100%)" // Dark to lighter with blue/teal hints
        }}
      ></div>
      {/* Dark Overlay - Adjusted for dark mode to be slightly less opaque if needed, or could be made darker */}
      {/* <div className="absolute inset-0 bg-black/70 dark:bg-black/80 z-10"></div> */}
      {/* Commented out the previous solid overlay */}

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-gold font-serif"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span 
              key={index} 
              variants={wordVariants} 
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/services"
            className="btn-primary font-sans uppercase tracking-wider text-sm font-medium inline-block"
          >
            View our services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NelsonHero; 