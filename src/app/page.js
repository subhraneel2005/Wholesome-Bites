"use client"

import Cover from "@/components/Cover";
import Landing from "@/components/Landing";
import NavBarr from "@/components/NavBarr";
import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";


export default function Home() {

  const comp = useRef(null);

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
  },[])


  return (
    <div className="relative" ref={comp}>
      <NavBarr/>
      <Cover/>
      <Landing/>
        <About/>
        <ContactUs/>
    </div>
  );
}
