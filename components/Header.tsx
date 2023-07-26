'use client';

import { AnimatePresence, cubicBezier, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Navigation from './Navigation';
import Instagram from './assets/icons/Instagram';

const transition = { ease: cubicBezier(0.6, 0.6, 0, 1), duration: 0.8 };

const mobileNavVarients = {
  openMenu: {
    height: '100%',
    transition,
  },
  closeMenu: {
    height: '0%',
    transition,
  },
  menuTextClose: {
    y: '0%',
    transition,
  },
  menuTextOpen: {
    y: '-150%',
    transition,
  },
  closeTextClose: {
    y: '150%',
    transition,
  },
  closeTextOpen: {
    y: '0%',
    transition,
  },
};

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menuHandler = (event: Event) => {
      if (!menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target as HTMLDivElement)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', menuHandler, true);

    return () => document.removeEventListener('click', menuHandler);
  }, []);

  const handleNavClick = () => {
    setIsNavOpen((isOpen) => !isOpen);
  };

  return (
    <header className=" py-10 border-b border-backgroundLines">
      <div className="wrapper max-w-screen-2xl mx-auto flex items-center flex-col xl:flex-row xl:justify-between relative">
        <div className="flex items-center pb-10 xl:pb-0">
          <Image
            src="/assets/images/kelsey-drawing.png"
            alt="Kibbled Kels Creations"
            width={124}
            height={120}
          />
          <p className="pl-5 text-tertiary uppercase font-Amatic text-5xl">
            Kels Illustrates
          </p>
        </div>
        <div className="flex items-center" ref={menuRef}>
          <AnimatePresence>
            <motion.div
              className={`md:static absolute overflow-hidden left-0 right-0 w-full px-10 top-full z-[9999] bg-white md:h-full`}
              variants={mobileNavVarients}
              initial={'closeMenu'}
              exit={'closeMenu'}
              animate={isNavOpen ? 'openMenu' : 'closeMenu'}
              onClick={handleNavClick}
            >
              <Navigation />
            </motion.div>
          </AnimatePresence>
          <div
            className="md:hidden relative overflow-hidden w-12 h-8"
            onClick={handleNavClick}
          >
            <motion.p
              className="font-Josefin font-light text-lg absolute top-0 right-0 left-0 bottom-0"
              variants={mobileNavVarients}
              initial={'menuTextClose'}
              exit={'menuTextOpen'}
              animate={isNavOpen ? 'menuTextOpen' : 'menuTextClose'}
            >
              Menu
            </motion.p>
            <motion.p
              className="font-Josefin font-light text-lg absolute top-0 right-0 left-0 bottom-0"
              variants={mobileNavVarients}
              initial={'closeTextClose'}
              exit={'closeTextOpen'}
              animate={isNavOpen ? 'closeTextOpen' : 'closeTextClose'}
            >
              Close
            </motion.p>
          </div>
          <a
            href="https://instagram.com/kels_illustrates"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0 ml-5 md:ml-0"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
