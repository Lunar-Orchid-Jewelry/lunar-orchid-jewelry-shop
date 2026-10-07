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
      <nav className="sticky max-w-7xl z-30 top-6 justify-center mx-auto px-10 rounded-md lg:opacity-90 py-0">
        <div className="bg-secondary rounded-md max-w-7xl mx-auto px-4 transition-all">
          <div className="flex items-center justify-between gap-5 h-16">
            {/* Logo */}
            <div className="">
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
            <div className="hidden  lg:flex justify-center text-center space-x-3 w-[80%] h-[60%]">
              <Link
                href="/"
                className="px-6 py-2 text-center rounded-md text-white text-sm font-cinzel hover:bg-highlight transition-colors" >
                Home
              </Link>
              <Link
                href="/catalog/all"
                className="px-6 py-2 text-center rounded-md text-white text-sm font-cinzel hover:bg-highlight transition-colors" >
                Shop All
              </Link>
              <Link
                href="/gallery/"
                className="px-6 py-2 text-center rounded-md text-white text-sm font-cinzel hover:bg-highlight transition-colors" >
                Gallery              </Link>
              <Link
                href="/catalog/necklaces"
                className="px-6 py-2 text-center rounded-md text-white text-sm font-cinzel hover:bg-highlight transition-colors" >
                FAQ
              </Link>
              <Link
                href="/policies/"
                className="px-6 py-2 text-center rounded-md text-white text-sm font-cinzel hover:bg-highlight transition-colors" >
                Contact
              </Link>
              <Link
                href="/catalog/rings"
                className="px-6 py-2 text-center rounded-md text-white text-sm font-cinzel hover:bg-highlight transition-colors" >
                About
              </Link>
            </div>

            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              <a
                href="https://www.instagram.com/lunarorchidjewelry"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src={basePath("images/instagram-logo.png")}
                  alt="Lunar Orchid Jewelry Instagram"
                  height={50}
                  width={50}
                  className="fab fa-instagram text-lg"
                />
              </a>
              <a
                href="https://www.pinterest.com/lunarorchidjewelry/"
                className="text-white hover:text-primary transition-colors"
                aria-label="Pinterest"
              >
                <Image
                  src={basePath("images/pinterest-logo.png")}
                  alt="Lunar Orchid Jewelry Pinterest"
                  height={50}
                  width={50}
                  className="fab fa-pinterest text-lg"
                />
              </a>
            </div>

            {/* Shopping Cart
            <div className="relative cursor-pointer">
              <Link href='/cart'>
                <div>
                  <Image
                    src={basePath("images/instagram-logo.png")}
                    alt="Lunar Orchid Jewelry Instagram"
                    height={50}
                    width={50}
                    className="fab fa-instagram text-lg"
                  />
                  <span className="absolute -top-2 -right-2 text-lg  bg-red-600 h-5 w-5 rounded-full grid place-items-center text-white">0
                  </span>
                </div>
              </Link>



              </div>

*/}


            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 text-white"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
                  href="/catalog/all"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  All Products
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
              <li>
                <Link
                  href="/catalog/earrings"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Earrings
                </Link>
              </li>
              <li className="flex justify-center space-x-4 pt-4">
                <a
                  href="#"
                  className="text-white p-2 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Image
                    src={basePath("images/instagram-logo.png")}
                    alt="Lunar Orchid Jewelry Instagram"
                    height={60}
                    width={60}
                    className="fab fa-instagram text-lg"
                  />
                </a>
                <a
                  href="#"
                  className="text-white p-2 hover:text-primary transition-colors"
                  aria-label="Pinterest"
                >
                  <Image
                    src={basePath("images/pinterest-logo.png")}
                    alt="Lunar Orchid Jewelry Pinterest"
                    height={60}
                    width={60}
                    className="fab fa-pinterest text-lg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
