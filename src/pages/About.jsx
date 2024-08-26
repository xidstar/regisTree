import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {plant, planting1} from '../images/index';
import { useSnapshot } from 'valtio';
import state from '../store';


const About = () => {
  const snap = useSnapshot(state)
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  // const controls = useAnimation();

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  const handleClick = () => {
    state.isMission = true;
  }

  return (
    <div className='w-full h-full flex relative pl-[5rem]'>
        <motion.div className="plant-wrapper absolute left-[60%] bottom-0">
            <img src={plant} alt="" />
        </motion.div>
      <motion.div className="about-img-wrapper w-[30vw] h-screen relative overflow-hidden"
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        onLoad={() => setIsLoaded(true)}
      >
        <img src={planting1} alt="" className='w-full h-full object-cover' />
      </motion.div>
      <div className="text-wrapper w-[50vw] h-screen ml-36 flex justify-start items-center">
        <div>
            <div className="title-wrapper">
                <h2 className='title-text text-[7rem] font-poiret font-bold'>Who We Are</h2>
            </div>
            <p className='w-[30rem] text-2xl my-10'>
                We are a female led social enterprise developing a 
                community based waste management model. Sustainable waste management at community level is our driver.
                <br />
                <br />
                We foster and empower communities to generate quality nutrient-rich organic compost using vemiculture.
            </p>
            <div className="about-btn w-44 h-44 border border-1 border-slate-800 rounded-full flex justify-center items-center cursor-pointer">
                <button className="offices-button text-center " onClick={handleClick}>LEARN MORE<br />+</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
