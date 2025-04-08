import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = ["Home", "About", "Features", "Contact"];

  return (
    <nav className="bg-white rounded-full top-0 sticky w-11/12 md:w-4/5 mx-auto mt-2 p-2 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-xl font-semibold text-text font-sora">SmartPay</div>

      <ul className="hidden md:flex gap-6 text-sm font-medium bg-bg text-white">
        {navLinks.map((link) => (
          <li
            key={link}
            onClick={() => setActive(link)}
            className={`cursor-pointer transition hover:text-primary ${
              active === link ? "text-text font-semibold" : ""
            }`}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className=" flex items-center gap-4 z-10">
        <Link to="/login">
          <button className="cursor-pointer hidden md:block   hover:bg-primary-dark text-white text-sm px-4 py-1.5 rounded-full transition duration-300">
            Log In
          </button>
        </Link>

        <Link to="/signup">
          <button className="cursor-pointer hidden md:block bg-primary hover:bg-white text-white text-sm px-4 py-1.5 rounded-full transition duration-300">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden text-2xl text-primary">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <LiaTimesSolid /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-md p-4 flex flex-col gap-4 md:hidden text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => {
                setActive(link);
                setIsOpen(false);
              }}
              className={`cursor-pointer transition hover:text-primary ${
                active === link ? "text-primary font-semibold" : ""
              }`}
            >
              {link}
            </li>
          ))}
          <button className="bg-[#8c52ff] hover:bg-[#7a45e6] text-white text-sm px-4 py-1.5 rounded-full transition duration-300">
            Get Started
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
