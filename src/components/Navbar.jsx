import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { SlHome } from "react-icons/sl";
import { TbPhoto } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { MdOutlineFileCopy } from "react-icons/md";
import { LiaPhoneSquareSolid } from "react-icons/lia";
import Button from "./Button";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  // Close mobile menu on resize (optional, helpful)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && menuOpen) setMenuOpen(false); // xl breakpoint
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const NavbarContent = ({ isDesktop }) => (
    <div className="xl:h-[65px] h-[45px] flex justify-between w-full items-center relative xl:px-10 px-6">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="h-[32px] w-[32px] xl:h-[65px] xl:w-[65px]"
        />
        {/* show title only on small screens */}
        <h1 className="text-[15px] hidden md:block xl:hidden ">
          Nepal Youth Club
        </h1>
      </div>
      <h2 className="md:hidden block my-auto sm:text-xl font-semibold">
        Nepal Youth Club
      </h2>

      {/* desktop links */}
      <ul className="xl:flex gap-6 items-center text-[20px] hidden">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)] transition-colors duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)] transition-colors duration-300"
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)] transition-colors duration-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/documentation"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)] transition-colors duration-300"
          }
        >
          Documentation
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)] transition-colors duration-300"
          }
        >
          Contact Us
        </NavLink>
      </ul>

      {/* right side: mobile menu button + donate button */}
      <div className="flex items-center gap-3">
        <button
          className="text-[24px] xl:hidden block"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(true)}
        >
          <LuMenu />
        </button>
        <div className="hidden xl:block">
          <NavLink to={"/donate"}>
            <Button text={"Donate"} />
          </NavLink>
        </div>
        {/* show Donate as small button on mobile too */}
      </div>
    </div>
  );

  // Single mobile menu (rendered once, not duplicated)
  const mobileMenuTop = isFixed ? "94px" : "65px"; // tweak if your nav heights differ
  return (
    <>
      {/* Normal Navbar */}
      <nav className="xl:h-[94px] h-[45px] bg-white flex items-center relative z-10">
        <NavbarContent />
      </nav>

      {/* Fixed Navbar */}
      <nav
        className={`xl:h-[94px] h-[45px] bg-white flex items-center 
          fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300 ease-in-out
          ${
            isFixed
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }
        `}
      >
        <NavbarContent />
      </nav>

      {/* Mobile menu (single instance) */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-[60] bg-white h-full w-1/2 p-4 pt-12 rounded-l-lg
          transform transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        role="menu"
      >
        <ul className="flex flex-col gap-2">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
          >
            <div className="text-[12px] flex gap-2 items-center">
              <SlHome className="text-[12px]" />
              Home
            </div>
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
          >
            <div className="text-[12px] flex gap-2 items-center">
              <TbPhoto className="text-[12px]" />
              Gallery
            </div>
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
          >
            <div className="text-[12px] flex gap-2 items-center">
              <FiInfo className="text-[12px]" />
              About
            </div>
          </NavLink>

          <NavLink
            to="/documentation"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
          >
            <div className="text-[12px] flex gap-2 items-center">
              <MdOutlineFileCopy className="text-[12px]" />
              Documentation
            </div>
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
          >
            <div className="text-[12px] flex gap-2 items-center">
              <LiaPhoneSquareSolid className="text-[12px]" />
              Contact Us
            </div>
          </NavLink>
        </ul>

        <div className="mt-6">
          <button className="text-[#003893] border rounded-[3px] border-[#003893] p-2 text-[10px] ">
            VOLUNTEER
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
