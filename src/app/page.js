"use client"

import Cover from "@/components/Cover";
import Landing from "@/components/Landing";
import NavBarr from "@/components/NavBarr";
import { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from "gsap";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import {useScroll, useTransform, motion} from "framer-motion"
import Lenis from 'lenis'
import useDimension from "@/useDimension";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg"
]


export default function Home() {

  const comp = useRef(null);
  const container = useRef(null)
  const {height} = useDimension();

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
          const t1 = gsap.timeline()

          t1.from("#introSlider", {
            xPercent: "-100",
            duration: 1.4,
            delay: 0.4,
          }).from(["#title1", "#title2", "#title3"], {
            opacity:0,
            y: "+=30",
            stagger: 0.4,
          }).to(["#title1", "#title2", "#title3"], {
            opacity:0,
            y: "-=30",
            delay: 0.3,
            stagger: 0.4,
          }).to("#introSlider",{
            xPercent: "-100",
            duration: 1.4,  
          }).from("#landingPage", {
            opacity:0,
            y: "+=30",
            duration: 0.5,
          })
      }, comp)

      return () => ctx.revert()
  },[]);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])


  return (
    <div className="relative" ref={comp}>
      <NavBarr/>
      <Cover/>
      <Landing/>
      <div ref={container} className="gallery bg-blue-900">
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className="h-screen w-full bg-blue-600"></div>
    </div>
  );
}

const Column = ({images, y=0}) => {
  return(
    <motion.div style={{y}} className="column">
      {
        images.map((src, index) => {
          return <div key={index} className="imageContainer">
            <Image src={`/images/${src}`} fill alt="IMAGE"/>
          </div>
        })
      }
    </motion.div>
  )
}
