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
    <header className="flex items-center flex-col xl:flex-row xl:justify-between w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] mx-auto md:py-24 py-10">
      <div className="flex items-center pb-10 xl:pb-0">
        <Image
          src="/assets/images/kelsey-drawing.png"
          alt="Kibbled Kels Creations"
          width={227}
          height={119}
        />
        <p className="pl-7 text-tertiary uppercase font-Amatic md:text-8xl sm:text-6xl text-5xl">
          KibbledKels <br /> Creations
        </p>
      </div>
      <div className="flex items-center md:flex-row flex-col">
        <nav className="font-Josefin font-light md:text-2xl sm:text-xl flex justify-between gap-9">
          {pagesArr.map(({ page, path }) => (
            <Link
              href={path}
              key={page}
              className={`${
                currentRoute === path && 'font-normal'
              } hover:text-secondary transition duration-150 ease-in-out`}
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
    </header>
  );
}

export default Header;
