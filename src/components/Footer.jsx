import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

// Import icons from React Icons
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#003893]">
      <div className="xl:grid xl:grid-cols-2 flex flex-col text-white xl:p-16 p-6 w-full">
        {/* Left section */}
        <div className="flex gap-6">
          <div className="h-[70px] w-[70px] xl:block hidden">
            <img
              src={logo}
              alt="footer logo of Nepal Youth Club"
              className="h-full w-full"
            />
          </div>

          <div className="flex flex-col text-[18px] gap-6 font-normal">
            <div>
              <h1 className="xl:text-[44px] text-[20px] font-semibold">
                Nepal Youth Club
              </h1>
              <p className="xl:text-[12px] text-[8px] text-white/60">
                Empowering youth to lead, inspire, & create positive change.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="xl:text-[18px] text-[12px]">
                <a
                  href="mailto:info@nepalyouthclub.com"
                  className="flex xl:flex-row flex-col xl:items-center xl:gap-4"
                >
                  <p className="xl:hidden block text-[12px] text-[#9F9F9F]">
                    Email
                  </p>
                  <FiMail className="h-[25px] w-[25px] xl:block hidden" />
                  info@nepalyouthclub.com
                </a>
              </div>

              <div className="xl:text-[18px] text-[12px]">
                <a
                  href="https://maps.google.com?q=Kausaltar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex xl:flex-row flex-col xl:items-center xl:gap-4"
                >
                  <p className="xl:hidden block text-[12px] text-[#9F9F9F]">
                    Address
                  </p>
                  <SlLocationPin className="h-[25px] w-[25px] xl:block hidden" />
                  Kausaltar (Floor above Nepal Bank)
                </a>
              </div>

              <div className="xl:text-[18px] text-[12px]">
                <a
                  href="tel:+9779768921929"
                  className="flex xl:flex-row flex-col xl:items-center xl:gap-4"
                >
                  <p className="xl:hidden block text-[12px] text-[#9F9F9F]">
                    Contact
                  </p>
                  <HiOutlinePhone className="h-[25px] w-[25px] xl:block hidden" />
                  +977-9768921929
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="xl:grid xl:grid-cols-2 flex">
          {/* Quick Links */}
          <div className="xl:flex flex-col items-center text-[18px] gap-6 hidden">
            <div className="font-medium">Quick Links</div>
            <ul className="flex flex-col items-center gap-3 font-light">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "hidden" : "hover:underline block"
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "hidden" : "hover:underline block"
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "hidden" : "hover:underline block"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/documentation"
                className={({ isActive }) =>
                  isActive ? "hidden" : "hover:underline block"
                }
              >
                Documentation
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "hidden" : "hover:underline block"
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>

          {/* Social Section */}
          <div className="flex flex-col py-4 justify-between xl:items-center xl:gap-2 gap-8">
            <div className="flex flex-col xl:items-center gap-3">
              <div className="font-medium xl:text-[18px] text-[16px] text-[#8B929D] xl:text-white">
                Connect with us
              </div>
              <div className="flex gap-3 items-center text-[24px]">
                <a
                  href="https://facebook.com/nepalyouthclub/"
                  aria-label="Facebook"
                >
                  <FaFacebook className="hover:text-blue-400 transition h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/nepalyouthclub/"
                  aria-label="Instagram"
                >
                  <FaInstagram className="hover:text-pink-400 transition h-6 w-6" />
                </a>
                <a
                  href="https://tiktok.com/nepalyouthclub/"
                  aria-label="TikTok"
                >
                  <AiOutlineTikTok className="hover:text-red-500 transition h-6 w-6" />
                </a>
                <a href="https://wa.me/9779768921929" aria-label="WhatsApp">
                  <FaWhatsapp className="hover:text-green-400 transition h-6 w-6" />
                </a>
                <a href="mailto:info@nepalyouthclub.com" aria-label="Email">
                  <FiMail className="hover:text-yellow-400 transition h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="xl:text-[15px] text-[10px] text-center flex xl:flex-col gap-2">
              <p>
                <a href="#">Terms and Conditions</a>
              </p>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white/30" />
      <p className="text-center text-white/60 xl:text-[12px] text-[7px] p-3">
        © 2025 Nepal Youth Club | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
