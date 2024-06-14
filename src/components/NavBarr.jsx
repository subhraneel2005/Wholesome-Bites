import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import Landing from './Landing';
import About from './About'; // Make sure to replace this with the actual path to your component
import ContactUs from './ContactUs'; // Make sure to replace this with the actual path to your component

function NavBarr() {
  const [activeComponent, setActiveComponent] = useState('home');

  return (
    <div>
      <div className="flex justify-between px-6 py-4 text-white w-full sticky top-0 bg-blue-600 z-20">
        <h1 className="text-xl font-bold">Wholesome Bites</h1>
        <ul className="text-lg hidden md:flex gap-4">
          <li className="cursor-pointer" onClick={() => setActiveComponent('home')}>Home</li>
          <li className="cursor-pointer" onClick={() => setActiveComponent('about')}>About us</li>
          <li className="cursor-pointer" onClick={() => setActiveComponent('contact')}>Contact us</li>
        </ul>
        <CiMenuBurger 
          size={30} 
          className={'flex md:hidden'} 
        />
      </div>
      <div>
        {activeComponent === 'home' && <Landing/>}
        {activeComponent === 'about' && <About />}
        {activeComponent === 'contact' && <ContactUs />}
      </div>
    </div>
  );
}

export default NavBarr;
