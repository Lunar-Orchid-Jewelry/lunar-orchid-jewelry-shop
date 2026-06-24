"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { basePath } from "../utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* === NAVBAR === */}
      <nav className="fixed top-2 left-0 right-0 z-50 container-main mx-auto px-2 rounded-md opacity-90 shadow-lg">
        <div className="bg-secondary rounded-md max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/">
                <Image
                  src={basePath("images/lunar-orchid-logo.png")}
                  alt="Lunar Orchid Jewelry"
                  height={80}
                  width={80}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white text-lg font-cinzel hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/catalog/necklaces"
                className="text-white text-lg font-cinzel hover:text-primary transition-colors"
              >
                Necklaces
              </Link>
              <Link
                href="/catalog/bracelets"
                className="text-white text-lg font-cinzel hover:text-primary transition-colors"
              >
                Bracelets
              </Link>
              <Link
                href="/catalog/rings"
                className="text-white text-lg font-cinzel hover:text-primary transition-colors"
              >
                Rings
              </Link>
            </div>

            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#"
                className="text-white p-2 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-lg" />
              </a>
              <a
                href="#"
                className="text-white p-2 hover:text-primary transition-colors"
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest text-lg" />
              </a>
              <a
                href="#"
                className="text-white p-2 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-lg" />
              </a>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 text-white"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${menuOpen ? "max-h-96" : "max-h-0"} transition-all duration-300 overflow-hidden lg:hidden bg-secondary`}
          >
            <ul className="py-4 space-y-4 text-center">
              <li>
                <Link
                  href="/"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/necklaces"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/bracelets"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Bracelets
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/rings"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Rings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
