"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-10 bg-header-color">
        
      {/* Logo */}
      <div className="flex items-center gap-2">
        
        <span className="text-white font-bold text-xl">Saul Aviña</span>
      </div>

      {/* Links */}
      <nav>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link 
                href="/"
                className="text-texto hover:text-white relative transition duration-300 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                Home
            </Link>

          </li>
          <li>
            <Link 
              href="#about"
              className="text-texto hover:text-white transition-colors duration-200"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link 
              href="/Curriculum"
              className="text-texto hover:text-white transition-colors duration-200"
            >
              Curriculum
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
