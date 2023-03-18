import Link from 'next/link';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

type NavbarProps = {
  darkMode: boolean | null;
  setDarkMode: any;
};

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };
  return (
    <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
      <div className="container mx-auto px-5 py-5 lg:p-10 max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-slate-800 dark:text-white">
            BrandonWu500
          </span>
        </div>
        <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-200 font-bold text-sm uppercase">
          <li className="hover:text-gray-400">
            <Link href="/">homepage</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/about">about me</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/projects">projects</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/contact">contact</Link>
          </li>
        </ul>
        <button
          id="moon"
          className="hidden lg:flex items-baseline gap-4 cursor-pointer"
          onClick={handleDarkModeToggle}
        >
          <div className="dark:text-gray-200 dark:hidden text-2xl">
            <DarkModeIcon fontSize="inherit" />
          </div>
          <div className="dark:text-gray-200 hidden dark:block text-2xl">
            <LightModeIcon fontSize="inherit" />
          </div>
          <span className="dark:text-gray-200 dark:hidden">DARK MODE</span>
          <span className="dark:text-gray-200 hidden dark:block">
            LIGHT MODE
          </span>
        </button>
        <div
          id="hamburger"
          className="space-y-1 md:hidden cursor-pointer z-20"
          onClick={() => setNavMenuOpen(!navMenuOpen)}
        >
          <div className="w-8 h-1 bg-black dark:bg-white"></div>
          <div className="w-8 h-1 bg-black dark:bg-white"></div>
          <div className="w-8 h-1 bg-black dark:bg-white"></div>
        </div>
        <ul
          id="menu"
          className={
            navMenuOpen
              ? 'transition-transform duration-500 absolute left-0 top-0 w-full p-10 rounded-b-3xl uppercase space-y-10 bg-white dark:bg-slate-900 dark:text-gray-200 text-center'
              : '-translate-y-full transition-transform duration-500 absolute left-0 top-0 w-full p-10 rounded-b-3xl uppercase space-y-10 bg-white dark:bg-slate-900 dark:text-gray-200 text-center'
          }
        >
          <li>
            <Link
              className="hLink"
              href="/"
              onClick={() => setNavMenuOpen(false)}
            >
              homepage
            </Link>
          </li>
          <li>
            <Link
              className="hLink"
              href="/about"
              onClick={() => setNavMenuOpen(false)}
            >
              about me
            </Link>
          </li>
          <li>
            <Link
              className="hLink"
              href="/projects"
              onClick={() => setNavMenuOpen(false)}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              className="hLink"
              href="/contact"
              onClick={() => setNavMenuOpen(false)}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
