import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { RiGalleryLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineContactPhone } from "react-icons/md";

const MobileNavbar = () => {
  return (
    <div className="bg-white p-[10px] w-full h-full">
      <ul className="flex flex-col text-[20px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:text-[#DC241F] transition-colors duration-300"
          }
          end
        >
          <div className="flex items-center gap-[5px]">
            <FiHome /> Home
          </div>
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:text-[#DC241F] transition-colors duration-300"
          }
        >
          <div className="flex items-center gap-[5px] ">
            <RiGalleryLine /> Gallery
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:text-[#DC241F] transition-colors duration-300"
          }
        >
          <div className="flex items-center gap-[5px] ">
            <IoMdInformationCircleOutline /> About
          </div>
        </NavLink>
        <NavLink
          to="/documentation"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:text-[#DC241F] transition-colors duration-300"
          }
        >
          <div className="flex items-center gap-[5px] ">
            <HiOutlineDocumentText /> Documentation
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#DC241F]"
              : "hover:text-[#DC241F] transition-colors duration-300"
          }
        >
          <div className="flex items-center gap-[5px] ">
            <MdOutlineContactPhone /> Contact Us
          </div>
        </NavLink>
      </ul>
      <div>
        <button className="px-5 py-3 rounded-sm text-[#003893] border-[#003893] bg-white border">
          VOLUNTEER
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
