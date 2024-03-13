import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  name: string;
  imageSrc: string;
}

const NavBar: React.FC<NavBarProps> = ({ name, imageSrc }) => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white">
      <div className="flex items-center">
        <Link to="/">
          <img className="mr-4 h-8" src={imageSrc} alt="Logo" />
        </Link>
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
          {name}
        </Link>
      </div>
      {/* Wrap the button with Link component */}
      <Link to="/login">
        <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-400">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
