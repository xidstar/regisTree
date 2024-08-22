import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BlindsReveal = () => {
  const blindsRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const blinds = blindsRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 0) {
        controls.start({ scaleY: 0, transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        ref={blindsRef}
        initial={{ scaleY: 1 }}
        animate={controls}
        className="absolute inset-0 bg-gray-900 origin-top"
        style={{ transformOrigin: 'top center' }}
      />
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold">Welcome to RegisTree</h1>
      </div>
    </div>
  );
};

export default BlindsReveal;
