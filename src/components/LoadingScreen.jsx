import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 3, // 3 seconds for the count to go from 000 to 100
      onUpdate: (value) => setCount(Math.floor(value)),
      onComplete: () => {
        if (onComplete) {
          setTimeout(onComplete, 700); // Add 0.5s delay before calling onComplete
        }
      },
    });

    return () => controls.stop();
  }, [onComplete]);

  return (
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3.5, duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
        className="inset-0 flex items-center justify-center bg-[#162f22] z-50 relative h-screen w-full"
    >
      <h1 className="text-[10rem] font-bold text-white font-economica">RegisTree</h1>
        <div className="mt-4 text-[7rem] font-mono text-white absolute bottom-24 right-16">
          {String(count).padStart(3, '0')}
        </div>
    </motion.div>
  );
};

export default LoadingScreen;
