'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navigation from './Navigation';
import Instagram from './assets/icons/Instagram';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
        <div className="flex items-center">
          <div
            className={`md:static absolute overflow-hidden left-0 right-0 w-full px-10 top-full z-[9999] bg-white md:h-full ${
              isNavOpen ? 'py-7 h-full' : 'py-0 h-0'
            }`}
          >
            <Navigation />
          </div>
          <div className="md:hidden" onClick={handleNavClick}>
            <p className="font-Josefin font-light text-lg">Menu</p>
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
