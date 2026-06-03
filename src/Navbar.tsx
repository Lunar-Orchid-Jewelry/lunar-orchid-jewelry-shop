import { useState } from "react";
import { Link } from "react-router";

function Navbar({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* === NAVBAR === */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-(--color-secondary) shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <a href="#">
                <img
                  src="assets/images/lunar-orchid-logo.png"
                  alt="Lunar Orchid Jewelry"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="lg:flex items-center space-x-8">
              <Link
                to="product"
                className="text-white text-md font-josefin hover:text-primary transition-colors"
              >
                Product
              </Link>
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
            className={`${menuOpen ? "max-h-125" : ""} max-h-0 transition-all overflow-hidden lg:hidden bg-dark border-t border-dark-border`}
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

      {children}
    </>
  );
}

export default Navbar;
