import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

function NavBarr() {


  return (
    <div className="flex justify-between px-6 py-4 text-white w-full sticky top-0 bg-blue-600 z-20">
        <h1 className="text-xl font-bold">Wholesome Bites</h1>
        <ul className="text-lg hidden md:flex gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Contact us</li>
        </ul>
        <CiMenuBurger 
          size={30} 
          className={'flex md:hidden'} 
        />
    </div>
  );
}

export default NavBarr;
