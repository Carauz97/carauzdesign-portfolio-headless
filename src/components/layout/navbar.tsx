"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center border m-4 max-md:w-full max-md:justify-between justify-center border-slate-700 px-6 py-4 rounded-full text-white text-sm">
      <a href="https://prebuiltui.com">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </a>
      <div className="hidden md:flex items-center gap-6 ml-7">
        <div className="relative overflow-hidden h-6 group">
          <Link href="/" className="block">
            Inicio
          </Link>
        </div>
        <div className="relative overflow-hidden h-6 group">
          <Link href="/blog" className="block">
            Blog
          </Link>
        </div>
        <div className="relative overflow-hidden h-6 group">
          <Link href="/portfolio" className="block">
            Portfolio
          </Link>
        </div>
      </div>

      <div className="hidden ml-14 md:flex items-center gap-4">
        <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>
        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Get Started
        </button>
      </div>
      <button
        onClick={() => setOpen(!open)}
        id="menuToggle"
        className="md:hidden text-gray-600"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div
        id="mobileMenu"
        className={clsx(
          "absolute flex-col top-48 text-base left-0 bg-black w-full gap-4",
          open ? "flex" : "hidden",
        )}
      >
        <a
          style={{ cursor: "pointer", textAlign: "right" }}
          onClick={() => setOpen(!open)}
        >
          X close
        </a>
        <a className="hover:text-indigo-600" href="#">
          Inicio
        </a>
        <a className="hover:text-indigo-600" href="#">
          Blog
        </a>
        <a className="hover:text-indigo-600" href="#">
          Acerca de mi
        </a>
        <a className="hover:text-indigo-600" href="#">
          Proyectos
        </a>

        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
}
