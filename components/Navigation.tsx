'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface NavigationProps {}

const pagesArr: { page: string; path: string }[] = [
  { page: 'Portfolio', path: '/' },
  { page: 'About Me', path: '/about' },
  { page: 'Get In Touch', path: '/contact' },
];

const Navigation: FC<NavigationProps> = () => {
  const currentRoute = usePathname();
  return (
    <nav className="font-Josefin font-light md:text-xl text-base flex flex-col md:flex-row justify-between md:gap-5 sm:gap-3 gap-1.5 ">
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
  );
};

export default Navigation;
