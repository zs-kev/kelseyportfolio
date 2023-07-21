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
    <footer className="py-10 border-t border-backgroundLines">
      <div className="flex items-center flex-col xl:px-8 px-4">
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
        <p className="font-Josefin pt-10 text-xs font-light">
          &copy; 2023 Kelsey Simon
        </p>
      </div>
    </footer>
  );
}

export default Footer;
