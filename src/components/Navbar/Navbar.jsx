import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = ({ isActive }) =>
    `hover:text-white transition-colors ${
      isActive ? "text-black font-semibold" : "text-white"
    }`;

  return (
    <>
      <nav className="bg-dark shadow-md fixed w-full z-50 top-0 left-0 bg-black">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap" rel="stylesheet" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div></div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <NavLink to="/" className={linkClass}>
                Rose
              </NavLink>
            </li>
            <li>
              <NavLink to="/prune" className={linkClass}>
                Prune
              </NavLink>
            </li>
            <li>
              <NavLink to="/the-unwrapping" className={linkClass}>
                The Unwrapping
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden text-white text-2xl focus:outline-none transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45' : 'rotate-0'
            }`}
          >
            {isMenuOpen ? "×" : "+"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button in Sidebar */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className={`text-white text-3xl focus:outline-none transition-transform duration-300 ${
              isMenuOpen ? 'rotate-0' : 'rotate-45'
            }`}
          >
            ×
          </button>
        </div>

        <div className="flex flex-col p-6 mt-8">
          <ul className="space-y-6 text-lg">
            <li>
              <NavLink
                to="/"
                className={linkClass}
                onClick={toggleMenu}
              >
                Rose
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prune"
                className={linkClass}
                onClick={toggleMenu}
              >
                Prune
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/the-unwrapping"
                className={linkClass}
                onClick={toggleMenu}
              >
                The Unwrapping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={linkClass}
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;