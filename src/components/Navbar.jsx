import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
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
    <div className="xl:h-[65px] h-[45px] flex justify-between w-full items-center relative xl:px-10 px-6">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="h-[32px] w-[32px] xl:h-[65px] xl:w-[65px]"
        />
      </div>
      <h1 className="text-[15px] xl:hidden block">Nepal Youth Club</h1>
      <ul className="xl:flex gap-6 items-center text-[20px] hidden">
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

      <div>
        <button className="text-[24px] xl:hidden block">
          <LuMenu />
        </button>
       <Button text={'Donate'}/>
      </div>
      <div className="absolute right-0 top-0 xl:hidden block">
        <div className="flex flex-col gap-8 bg-white p-4 rounded-l-lg w-[136px] h-[211px]">
          <ul className="flex flex-col gap-2 ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
              end
            >
              <div className="text-[10px] flex gap-2 items-center">
                <SlHome
                  className="text-[
                12px]"
                />
                Home
              </div>
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
            >
              <div className="text-[10px] flex gap-2 items-center">
                <TbPhoto
                  className="text-[
                12px]"
                />
                Gallery
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
            >
              <div className="text-[10px] flex gap-2 items-center">
                <FiInfo
                  className="text-[
                12px]"
                />
                About
              </div>
            </NavLink>
            <NavLink
              to="/documentation"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
            >
              <div className="text-[10px] flex gap-2 items-center">
                <MdOutlineFileCopy
                  className="text-[
                12px]"
                />
                Documentation
              </div>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-[#DC241F]" : "")}
            >
              <div className="text-[10px] flex gap-2 items-center">
                <LiaPhoneSquareSolid
                  className="text-[
                12px]"
                />
                Contact Us
              </div>
            </NavLink>
          </ul>
          <div>
            <button className="text-[#003893] border rounded-[3px] border-[#003893] p-2 text-[10px]">
              VOLUNTEER
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Normal Navbar */}
      <nav className="xl:h-[94px] h-[45px] bg-white flex items-center  relative z-10">
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
          }`}
      >
        <NavbarContent />
      </nav>
    </>
  );
};

export default Navbar;
