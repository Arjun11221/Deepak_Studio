import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="containermx-auto flex justify-around items-center">
        <Link to="/" className="text-white hover:text-gray-400">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-400">
          About
        </Link>
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={image} alt="Logo" className="h-28 rounded-lg w-40"/>
            
          </Link>
        </div>
        <Link to="/services" className="text-white hover:text-gray-400">
          Services
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-400">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
