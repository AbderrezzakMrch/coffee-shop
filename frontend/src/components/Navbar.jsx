import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white italic">
            Qahwat Al-Asala
          </span>
        </a>

        {/* Mobile menu button */}
        <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 md:order-2 rtl:space-x-reverse">
          <button
            type="button"
            className="hidden md:block text-white bg-[#A0583C] hover:bg-[#dda491] transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Sign up/Login
          </button>
          <button
            type="button"
            className="hidden md:block text-white bg-[#A0583C] hover:bg-[#dda491] transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            <FontAwesomeIcon icon={faApple} className="text-xl mr-1" />
            Get the app
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links - Desktop & Mobile */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 flex-col p-4 md:p-0 mt-4 text-xl font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:hover:text-[#C08267] transition md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#explore"
                className="block py-2 px-3 text-white rounded md:hover:text-[#C08267] transition md:p-0"
              >
                Explore Us
              </a>
            </li>
            <li>
              <a
                href="#brands"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-[#C08267] transition md:p-0"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                href="#Contact us"
                className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-[#C08267] transition md:p-0"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;