"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useSnapshot } from "valtio";
import state from "../store";
import { fadeAnimation, slideAnimation } from '../config/motion';
import { logo2 } from '../images';


const scrollToSection = (index) => {
  sectionRefs[index].current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start',
  });
};

const Navbar = ({ sections, scrollToSection }) => {
  const snap = useSnapshot(state);
  

  const toggleMenu = (id) => {
    state.isMenuOpen = !snap.isMenuOpen;
    return snap.isMenuOpen;
  }
  
    return (
        <motion.div className='navbar fixed w-full md:w-auto z-40'>
          <div className="menu absolute top-0 left-0 h-16 md:h-screen w-full md:w-16 py-10 px-2 bg-slate-100 shadow-xl flex flex-col justify-between items-center z-40">
            <div className='navbar-wrapper flex md:flex-col-reverse justify-between items-center h-full w-full'>
                <p className="uppercase md:-rotate-90 hidden md:flex p-6">Page</p>

                <button 
                  className={`icon-wrapper rounded-full ${snap.isMenuOpen ? "bg-lime-800" : "bg-transparent"}  w-12 h-12 flex justify-center items-center`}
                  onClick={toggleMenu}
                >
                  {snap.isMenuOpen ? (
                      <RxCross1 className='text-4xl hover:cursor-pointer text-white'/>
                    ) : (
                      <RxHamburgerMenu className='text-4xl hover:cursor-pointer'/>
                    )
                  }
                </button>
                
                <a href="/">
                  <img src={logo2} alt="RegisTree logo" />
                </a>
            </div>
            
          </div>

          

          <div className={`page-links h-screen flex justify-center items-center bg-slate-100 w-full md:min-w-[50vw] absolute left-0 top-0 z-30 text-4xl duration-500 
            ${snap.isMenuOpen ? "" : "-translate-x-full"}`} {...state.isMenuOpen ? {...slideAnimation("right")} : {...slideAnimation("left")}}>
            <div className="link-wrapper flex flex-col justify-between h-[40%]" onClick={toggleMenu}>
              {/* <Link href="/" onClick={toggleMenu}>Home</Link>*/}
              {sections.map((section, index) => (
                <button
                  key={index}
                  className="text-black font-economica text-xl font-bold"
                  onClick={() => scrollToSection(index)}
                >
                  {section.content}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
    )
}

export default Navbar
