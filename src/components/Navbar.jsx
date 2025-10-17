import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

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
      <div>
        <img src={logo} alt="Logo" className="h-[65px] w-[65px]" />
      </div>

      <ul className="flex gap-6 items-center text-[20px]">
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

      <div>
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
    </>
  );
};

export default Navbar;
