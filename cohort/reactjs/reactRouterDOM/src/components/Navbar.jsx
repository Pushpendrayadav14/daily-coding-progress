import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-sky-400 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-white cursor-pointer">
          NotesApp
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-lg font-semibold">
          <li>
            <Link
              to={"/"}
              className="text-white hover:text-blue-900 transition duration-300"
            >
              Main
            </Link>
          </li>
          <li>
            <Link
              to={"/home"}
              className="text-white hover:text-blue-900 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={"/about"}
              className="text-white hover:text-blue-900 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to={"/contect"}
              className="text-white hover:text-blue-900 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
