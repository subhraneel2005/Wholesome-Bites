import React from 'react';
import orangeImg from "../../public/orange.png";
import Image from 'next/image';


function Landing() {
  return (
    <div className="select-none min-h-screen w-full bg-blue-600 text-blue-100 flex flex-col justify-center items-center relative">
        <Image src={orangeImg} alt="orangeImg" height={400} width={400} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 bg-blue-600 opacity-60"/>
        <h1 className="md:text-[10vw] text-[17vw] text-center z-10 heroText">WholeSome Bites</h1>
        <p className="md:text-lg text-sm text-center text-white z-10 mt-10 font-semibold">WholesomeBites: Eat Well, Live Well</p>
        <button className="px-5 py-2 rounded-xl bg-blue-200 text-blue-800 z-10 hover:bg-blue-400 duration-500">Get Started</button>
    </div>
  )
}

export default Landing
