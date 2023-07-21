'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Instagram from './assets/icons/Instagram';

const pagesArr: { page: string; path: string }[] = [
  { page: 'Portfolio', path: '/' },
  { page: 'About Me', path: '/about' },
  { page: 'Get In Touch', path: '/contact' },
];

function Header() {
  const currentRoute = usePathname();
  return (
    <header className=" py-10 border-b border-backgroundLines">
      <div className="max-w-screen-2xl mx-auto xl:px-8 px-4 flex items-center flex-col xl:flex-row xl:justify-between">
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
        <div className="flex items-center md:flex-row flex-col">
          <nav className="font-Josefin font-light text-xl flex justify-between gap-5 ">
            {pagesArr.map(({ page, path }) => (
              <Link
                href={path}
                key={page}
                className={`${
                  currentRoute === path && 'bg-primary'
                } hover:border hover:border-tertiary border border-transparent transition duration-150 ease-in-out px-4 py-2.5`}
              >
                {page}
              </Link>
            ))}
          </nav>
          <a
            href="https://instagram.com/kels_illustrates"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 ml-5 md:mt-0"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
