import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid"; // Tailwind Icons

function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-300 to-green-300 dark:from-gray-800 dark:to-gray-900 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          className="text-black dark:text-white font-bold text-2xl md:text-2xl"
          to="/"
          onClick={() => setActiveTab("/")}
        >
          MedVoice AI
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-black dark:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 items-center transition-all duration-300 ease-in-out
                    ${menuOpen ? "block" : "hidden"} md:block`}
        >
          <li className="py-2 md:py-0">
            <Link
              className={`px-4 py-2 rounded-md text-lg font-medium transition duration-300 
                            ${
                              activeTab === "/"
                                ? "bg-blue-500 text-white shadow-md"
                                : "text-black dark:text-white hover:text-blue-600"
                            }`}
              to="/"
              onClick={() => {
                setActiveTab("/");
                setMenuOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              className={`px-4 py-2 rounded-md text-lg font-medium transition duration-300 
                            ${
                              activeTab === "/about"
                                ? "bg-blue-500 text-white shadow-md"
                                : "text-black dark:text-white hover:text-blue-600"
                            }`}
              to="/about"
              onClick={() => {
                setActiveTab("/about");
                setMenuOpen(false);
              }}
            >
              About
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              className={`px-4 py-2 rounded-md text-lg font-medium transition duration-300 
                            ${
                              activeTab === "/medvoice"
                                ? "bg-blue-500 text-white shadow-md"
                                : "text-black dark:text-white hover:text-blue-600"
                            }`}
              to="/medvoice"
              onClick={() => {
                setActiveTab("/medvoice");
                setMenuOpen(false);
              }}
            >
              MedVoice AI
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              className={`px-4 py-2 rounded-md text-lg font-medium transition duration-300 
                            ${
                              activeTab === "/features"
                                ? "bg-blue-500 text-white shadow-md"
                                : "text-black dark:text-white hover:text-blue-600"
                            }`}
              to="/features"
              onClick={() => {
                setActiveTab("/features");
                setMenuOpen(false);
              }}
            >
              Extra Features
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              className={`px-4 py-2 rounded-md text-lg font-medium transition duration-300 
                            ${
                              activeTab === "/techstack"
                                ? "bg-blue-500 text-white shadow-md"
                                : "text-black dark:text-white hover:text-blue-600"
                            }`}
              to="/techstack"
              onClick={() => {
                setActiveTab("/techstack");
                setMenuOpen(false);
              }}
            >
              Tech Stack
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
