import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white">
      <div className="flex items-center">
        <img className="mr-4 h-8" src="" alt="Logo" />
        <Link
          to="/"
          className="px-3 py-2 text-xl font-medium hover:text-gray-400"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-3 py-2 text-xl font-medium hover:text-gray-400"
        >
          About
        </Link>
      </div>
      <button className="px-4 py-2 font-medium bg-white text-blue-600 rounded-md hover:bg-gray-400">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
