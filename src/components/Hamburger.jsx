import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hamburger = () => {
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);

  useGSAP(() => {
    hamburgerRef.current.addEventListener('click', () => {
      gsap.to(menuRef.current, {
        duration: 0.5,
        className: 'howMenu',
        ease: 'power2.inOut',
      });
      gsap.to(hamburgerRef.current, {
        duration: 0.5,
        className: 'closeIcon',
        ease: 'power2.inOut',
      });
    });

    menuRef.current.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        gsap.to(menuRef.current, {
          duration: 0.5,
          className: '',
          ease: 'power2.inOut',
        });
        gsap.to(hamburgerRef.current, {
          duration: 0.5,
          className: '',
          ease: 'power2.inOut',
        });
      }
    });
  });

  return (
    <div>
      <div ref={hamburgerRef} className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div ref={menuRef} className="menu">
        <ul>
          <li><a href="#">Menu Item 1</a></li>
          <li><a href="#">Menu Item 2</a></li>
          <li><a href="#">Menu Item 3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;