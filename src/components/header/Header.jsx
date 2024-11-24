import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-11/12 mx-auto py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732385189/logo_utajox.png"
            alt="Logo"
            className="w-28"
          />
        </div>

        {/* Hamburger Menu for Small Devices */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className="text-2xl text-[#FF5B28]" />
            ) : (
              <MdMenu className="text-2xl text-[#FF5B28]" />
            )}
          </button>
        </div>

        {/* Navigation Menu for Large Devices */}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-8 text-[#0F0E0E] font-semibold">
              <li>
                <NavLink to="/" activeClassName="text-[#FF5B28]" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="text-[#FF5B28]">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="text-[#FF5B28]">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/properties" activeClassName="text-[#FF5B28]">
                  Properties
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:block">
          <button className="flex items-center gap-2 text-[#0F0E0E] font-semibold border-2 border-[#FF5B28] px-4 py-2 rounded-lg">
            Contact Us
            <span>
              <img
                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732385450/Vector_qbkpq8.png"
                alt="Arrow Icon"
                className="w-4"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-md z-50 lg:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            {/* Logo */}
            <div>
              <img
                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732385189/logo_utajox.png"
                alt="Logo"
                className="w-20"
              />
            </div>

            {/* Close Button */}
            <button onClick={toggleMenu}>
              <MdClose className="text-2xl text-[#FF5B28]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul className="flex flex-col gap-6 text-center text-[#0F0E0E] font-semibold">
              <li>
                <NavLink to="/" onClick={toggleMenu} activeClassName="text-[#FF5B28]" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu} activeClassName="text-[#FF5B28]">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={toggleMenu} activeClassName="text-[#FF5B28]">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/properties" onClick={toggleMenu} activeClassName="text-[#FF5B28]">
                  Properties
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Contact Button in Drawer */}
          <div className="mt-6 text-center">
            <button className="flex items-center justify-center gap-2 border-2 border-[#FF5B28] px-4 py-2 rounded-lg mx-auto">
              Contact Us
              <span>
                <img
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732385450/Vector_qbkpq8.png"
                  alt="Arrow Icon"
                  className="w-4"
                />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
