import React from 'react';
import { motion, animate } from 'framer-motion';
import { headTextAnimation, headContentAnimation } from '../config/motion';

const Homepage = () => {
  return (
    <motion.article
      className="home h-full relative w-full flex justify-center items-center flex-col overflow-y-hidden"
    >
      <div className="overlay w-full h-screen opacity-70 bg-black absolute z-10"></div>
      <motion.h1 className="z-20 text-[20rem] text-[#ccc] font-poiret font-bold -mt-24" {...headTextAnimation}>
          RegisTree
      </motion.h1>
      <motion.p
          className="font-body text-3xl text-[#ccc] max-w-[40rem] text-center z-20"
          {...headContentAnimation}
      >
          Composting is our call to climate action
      </motion.p>
      
      
    </motion.article>
  )
}

export default Homepage
