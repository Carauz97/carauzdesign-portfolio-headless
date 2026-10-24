"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // por si la página se recarga ya con scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none sticky top-0 z-50 md:p-4">
      <nav
        className={clsx(
          "z-10 pointer-events-auto relative flex items-center border border-slate-700 bg-background px-6 py-4 text-sm text-white",
          " max-md:justify-between justify-center",
          "transition-all duration-300 ease-out motion-reduce:transition-none",
          scrolled
            ? "rounded-none border-x-transparent border-t-transparent md:-translate-y-4 m-0"
            : "rounded-[2.75rem]  m-4",
        )}
      >
        <a href="/">
          <Image
            width={50}
            height={50}
            src="https://primary-production-fdfe8.up.railway.app/wp-content/uploads/2026/10/logo-w.png"
            alt="logo"
          />
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
    </header>
  );
}
