import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import Landing from './Landing';
import About from './About'; // Make sure to replace this with the actual path to your component
import ContactUs from './ContactUs'; // Make sure to replace this with the actual path to your component
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import {AnimatePresence, motion} from "framer-motion"

function NavBarr() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0, 0.55, 0.45, 1] 
      }
    },
    closed: { 
      opacity: 0,
      y: '-100%',
      transition: { 
        duration: 0.6, 
        ease: [0, 0.55, 0.45, 1] 
      }
    }
  };

  return (
    <div>
      <div className="select-none flex justify-between px-6 py-4 text-white w-full sticky top-0 bg-blue-600 z-20">
        <h1 className="text-xl font-bold">Wholesome Bites</h1>
        <h1 className=" bg-gray-200 rounded-[30px] px-4 text-black py-1 cursor-pointer" id="menuButton"onClick={() => setIsMenuOpen(!isMenuOpen)}>MENU</h1>


      </div>
      <AnimatePresence mode="wait">
        <motion.div 
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`select-none w-auto px-10 py-6 h-screen bg-gray-300 text-gray-900 md:text-8xl text-4xl ${isMenuOpen ? "flex" : "hidden"}`}>
          <ul className="space-y-16 flex flex-col">
            <li className="cursor-pointer hover:text-gray-800 text-gray-600 duration-500">HOME</li>
            <li className="cursor-pointer hover:text-gray-800 text-gray-600 duration-500">ABOUT US</li>
            <li className="cursor-pointer hover:text-gray-800 text-gray-600 duration-500">CONTACT US</li>
          </ul>
        </motion.div>
        </AnimatePresence>
    </div>
  );
}

export default NavBarr;