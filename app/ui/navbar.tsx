"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* === NAVBAR === */}
      <nav className="fixed top-2 left-0 right-0 z-50 bg-secondary opacity-90 shadow-lg container-main mx-auto rounded-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/">
                <Image
                  src="/images/lunar-orchid-logo.png"
                  alt="Lunar Orchid Jewelry"
                  height={80}
                  width={80}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="lg:flex items-center space-x-8">
              <a
                href="product"
                className="text-white text-md font-josefin hover:text-primary transition-colors"
              >
                Product
              </a>
              <a
                href="#"
                className="text-white text-md font-josefin hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white text-md font-josefin hover:text-primary transition-colors"
              >
                Necklaces
              </a>
              <a
                href="#"
                className="text-white text-lg font-josefin hover:text-primary transition-colors"
              >
                Bracelets
              </a>
              <a
                href="#"
                className="text-white text-lg font-josefin hover:text-primary transition-colors"
              >
                Rings
              </a>
              <a
                href="#"
                className="text-white text-lg font-josefin hover:text-primary transition-colors"
              >
                Gallery
              </a>
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
              Menu
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${menuOpen ? "max-h-125" : ""} max-h-0 transition-all overflow-hidden lg:hidden bg-accent border-t border-dark-border`}
          >
            <ul className="py-4 space-y-4 text-center">
              <li>
                <a
                  href="#"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                >
                  Necklaces
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                >
                  Bracelets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                >
                  Rings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                >
                  Gallery
                </a>
              </li>
            </ul>
            <div className="flex justify-center space-x-6 pb-4">
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
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
