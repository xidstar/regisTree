import React from 'react';
import { motion, animate } from 'framer-motion';
import { leaf4 } from '../images';
import { headTextAnimation, headContentAnimation } from '../config/motion';

const Homepage = () => {
  return (
    <motion.article
      className="home h-full relative w-full flex justify-center items-center flex-col overflow-y-hidden"
    >
      <motion.h1 className="z-20 text-[20rem] text-[#11382f] font-poiret font-bold -mt-24" {...headTextAnimation}>
          RegisTree
      </motion.h1>
      <motion.p
          className="font-body text-3xl text-black max-w-[40rem] text-center z-20"
          {...headContentAnimation}
      >
          Composting is our call to climate action
      </motion.p>
      <img src={leaf4} alt="" className='-bottom-32 -translate-x-3/4 absolute' />
      
      
    </motion.article>
  )
}

export default Homepage
