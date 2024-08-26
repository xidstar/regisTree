import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { useSnapshot } from 'valtio';
import state from '../store';
import { slideAnimation } from '../config/motion';
import { planting2, planting3 } from '../images';

const Mission = () => {
    const snap = useSnapshot(state);

    const closeMission = () => {
        state.isMission = false;
    }

  return (
    <div className={`mission absolute w-full h-screen z-50 left-0 ease-in-out delay-150 duration-300 top-0`}>
        <button 
            className={`icon-wrapper rounded-full bg-lime-800 w-12 h-12 flex justify-center items-center absolute right-10 top-10`}
            onClick={closeMission}
        >
            <RxCross1 className='text-4xl hover:cursor-pointer text-white hover:rotate-90 ease-in-out duration-300'/>
        </button>

      <div className="relative w-[70%] mx-auto h-full p-14">
        <div className="top flex justify-center items-center gap-20">
            <div className="text w-[50%]">
                <div className="title-wrapper !h-[7rem] mb-5">
                    <h3 className='title-text text-[4rem] font-poiret font-bold'>Our Mission</h3>
                </div>
                <p>Our mission is to address the lack
                    of access to waste management
                    services bu rural communities
                    who are often neglected by both
                    municipal and private waste
                    collectors.</p>
            </div>
            <div className="img w-[50%]">
                <div className="img-wrapper p-14 bg-white w-[30rem] shadow-xl rotate-12 hover:translate-x-3 ease-in-out duration-300">
                    <img src={planting2} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
        <div className="bottom flex justify-center items-center gap-20">
            <div className="img w-[50%]">
                <div className="img-wrapper p-14 bg-white w-[30rem] shadow-xl -rotate-12 hover:-translate-x-3 ease-in-out duration-300">
                    <img src={planting3} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
            
            <div className="text w-[50%]">
                <div className="title-wrapper !h-[7rem] mb-5">
                    <h3 className='title-text text-[4rem] font-poiret font-bold'>Our Vision</h3>
                </div>
                <p>Our vision empowered
                    communities taking charge of their
                    generation and management in a
                    way that creates value for them
                    especially through composting of
                    organic waste and use of organic
                    compost and fertiliser to improve
                    soil health, increase yields, and
                    promote food security.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
