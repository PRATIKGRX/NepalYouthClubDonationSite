import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [navOpen, setNavOpen] = useState(false)
  const handleNavOpen = () => {
    setNavOpen(!navOpen)
  }
console.log(navOpen)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const trigger = window.innerHeight * 0.5;

      if (scrollY > trigger && !isFixed) setIsFixed(true);
      else if (scrollY <= trigger && isFixed) setIsFixed(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  const NavbarContent = () => (
    <div className="h-[65px] flex justify-between w-full items-center">
      <div className="flex">
        <div><img src={logo} alt="Logo" className="max-h-[65px] max-w-[65px]" /></div>
      </div>
      <h2 className="md:hidden block my-auto sm:text-xl font-semibold">Nepal Youth Club</h2>

      <ul className="hidden md:flex gap-6 items-center text-[20px]">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-[#DC241F]" : "hover:text-[#DC241F] transition-colors duration-300"} end>
          Home
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-[#DC241F]" : "hover:text-[#DC241F] transition-colors duration-300"}>
          Gallery
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#DC241F]" : "hover:text-[#DC241F] transition-colors duration-300"}>
          About
        </NavLink>
        <NavLink to="/documentation" className={({ isActive }) => isActive ? "text-[#DC241F]" : "hover:text-[#DC241F] transition-colors duration-300"}>
          Documentation
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#DC241F]" : "hover:text-[#DC241F] transition-colors duration-300"}>
          Contact Us
        </NavLink>
      </ul>

      <button className="w-[24px] flex justify-center md:hidden text-3xl" onClick={()=>handleNavOpen()}>
        {navOpen? "X" : <FaBars/>}
      </button>

      <div className="hidden md:block">
        <button className="px-4 py-2 rounded-sm bg-[#DC241F] text-white text-[22px]">
          Donate
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Normal Navbar */}
      <nav className="h-[94px] bg-white flex items-center px-10 relative z-10">
        <NavbarContent />
      </nav>

      {/* Fixed Navbar */}
      <nav
        className={`h-[94px] bg-white flex items-center px-10 fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300 ease-in-out
          ${
            isFixed
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
      >
        <NavbarContent />
      </nav>
      {navOpen && <div className="p-[10px] fixed"><MobileNavbar/></div>}
    </>
  );
};

export default Navbar;
