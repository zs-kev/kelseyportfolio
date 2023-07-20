'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Instagram from './assets/icons/Instagram';

const pagesArr: { page: string; path: string }[] = [
  { page: 'Portfolio', path: '/' },
  { page: 'About Me', path: '/about' },
  { page: 'Get In Touch', path: '/contact' },
];

function Footer() {
  const currentRoute = usePathname();
  return (
    <footer className="flex items-center justify-center w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] mx-auto md:py-24 py-10">
      <div className="flex items-center flex-col">
        <div className="font-Josefin font-light md:text-2xl sm:text-xl flex justify-between gap-9">
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
        </div>
        <a
          href="https://instagram.com/kels_illustrates"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 flex items-center font-Josefin hover:text-secondary transition duration-150 ease-in-out"
        >
          <Instagram />
          Follow For More
        </a>
        <p className="font-Josefin pt-10 text-xs">&copy; 2023 Kelsey Simon</p>
      </div>
    </footer>
  );
}

export default Footer;
