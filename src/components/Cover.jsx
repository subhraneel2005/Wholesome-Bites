import React from 'react';

function Cover() {
  return (
    <div id="introSlider" className="h-screen p-10 bg-gray-50 absolute top-0 left-0 flex flex-col justify-center items-center z-30 w-full text-gray-800">
        <h1 id="title1" className="md:text-[7vw] text-[14vw]">Eat Well</h1>
        <h1 id="title2" className="md:text-[7vw] text-[14vw]">Sleep Well</h1>
        <h1 id="title3" className="md:text-[7vw] text-[14vw]">Live Well</h1>
    </div>
  )
}

export default Cover