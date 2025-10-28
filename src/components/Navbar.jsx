import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect, useRef } from "react"; // 👈 Import useRef
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { SlHome } from "react-icons/sl";
import { TbPhoto } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { MdOutlineFileCopy } from "react-icons/md";
import { LiaPhoneSquareSolid } from "react-icons/lia";
import Button from "./homeComponenets/urgentSection/Button";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Scroll logic for fixed navbar
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

  
  //for isMenuOpen closing 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); 

  const NavbarContent = () => (
    <div className="xl:h-[65px] h-[45px] flex justify-between w-full items-center relative xl:px-10 px-6">
      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="Logo"
          className="h-[32px] w-[32px] xl:h-[65px] xl:w-[65px]"
        />
      </div>

      {/* Title (only on mobile) */}
      <h1 className="text-[15px] md:hidden block font-semibold">
        Nepal Youth Club
      </h1>

      {/* Desktop Links */}
      <ul className="md:flex gap-6 items-center justify-center  text-[20px] hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)] transition-colors duration-300"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)]"
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)]"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/documentation"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)]"
          }
        >
          Documentation
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:[text-shadow:4px_4px_5px_rgba(0,0,0,0.4)]"
          }
        >
          Contact Us
        </NavLink>
         
      </ul>

      <div className="flex items-center gap-3">
      
     <Button text="Donate"/>

        {/* Hamburger only on mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[24px] md:hidden block"
        >
          <LuMenu />
        </button>
      </div>

      {/* Mobile Menu (slide-in from right) */}
      {isMenuOpen && (
        <div
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-easing="ease-in-out"
          
          className="absolute right-0 top-[0px] bg-white shadow-lg p-4  rounded-l-lg w-[160px] flex flex-col gap-4 md:hidden transition-all duration-300 z-[100]"
        >
          <ul className="flex flex-col gap-3 text-[14px]">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#DC241F] " : "")}
              end
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex gap-2 items-center">
                <SlHome /> Home
              </div>
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex gap-2 items-center">
                <TbPhoto /> Gallery
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex gap-2 items-center">
                <FiInfo /> About
              </div>
            </NavLink>
            <NavLink
              to="/documentation"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex gap-2 items-center">
                <MdOutlineFileCopy /> Documentation
              </div>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex gap-2 items-center">
                <LiaPhoneSquareSolid /> Contact Us
              </div>
            </NavLink>
          </ul>
          <button className="text-[#003893] border rounded-[3px] mt-10 border-[#003893] p-2 text-[10px]">
            VOLUNTEER
          </button>
           
        </div>
      )}
       
    </div>
  );

  return (
    <div ref={navRef}> 
      {/* Normal Navbar */}
      <nav className="xl:h-[94px] h-[45px] bg-white flex items-center relative z-10">
        <NavbarContent />
      </nav>

  
      <nav
  className={`xl:h-[94px] h-[45px] bg-white flex items-center
  fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300 ease-in-out
  ${
    isFixed
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-full pointer-events-none"
  }`}
>
  <NavbarContent />
</nav>

    </div>
  );
};

export default Navbar;