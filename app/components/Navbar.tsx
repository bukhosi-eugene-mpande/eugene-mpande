"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  activePage?: "home" | "projects" | "upcoming";
}

export default function Navbar({ activePage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="tp-nav sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between flex-wrap py-2 gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-poor-story text-gray-900 no-underline">
          <Image src="/images/bl-logo.svg" alt="Logo" width={80} height={80} />
          Eugene Mpande
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded border border-gray-400"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700"></span>
        </button>

        {/* Nav links */}
        <div className={`${menuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row items-center gap-1 w-full lg:w-auto`}>
          <Link
            href="/"
            className={`px-3 py-1 font-poor-story text-lg rounded hover:text-indigo-700 ${activePage === "home" ? "font-extrabold" : ""}`}
          >
            Home
          </Link>
          <Link href="/#about-me" className="px-3 py-1 font-poor-story text-lg rounded hover:text-indigo-700">
            About Me
          </Link>
          <Link
            href="/projects"
            className={`px-3 py-1 font-poor-story text-lg rounded hover:text-indigo-700 ${activePage === "projects" ? "font-extrabold" : ""}`}
          >
            Projects
          </Link>
          <Link
            href="/upcoming"
            className={`px-3 py-1 font-poor-story text-lg rounded hover:text-indigo-700 ${activePage === "upcoming" ? "font-extrabold" : ""}`}
          >
            Upcoming Projects
          </Link>
          <Link href="/#contact-me" className="px-3 py-1 font-poor-story text-lg rounded hover:text-indigo-700">
            Contact Me
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          <a href="https://github.com/bukhosi-eugene-mpande" className="p-2 rounded hover:bg-indigo-100">
            <Image src="/images/github.svg" alt="GitHub" width={41} height={41} />
          </a>
          <a href="https://www.linkedin.com/in/bukhosi-mpande-6a34a3198" className="p-2 rounded hover:bg-indigo-100">
            <Image src="/images/linkedin.svg" alt="LinkedIn" width={50} height={50} />
          </a>
        </div>
      </div>
    </nav>
  );
}
