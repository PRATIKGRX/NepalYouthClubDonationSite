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
      <div className="sm:grid sm:grid-cols-2 flex flex-col text-white xl:p-16 p-6 w-full">
        {/* Left section */}
        <div className=" ">
          {" "}
          <div className="flex xl:gap-6 gap-2 ">
            <div className="xl:h-[70px] xl:w-[70px] md:h-[50px] md:w-[50px] md:block hidden">
              <img
                src={logo}
                alt="footer logo of Nepal Youth Club"
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col text-[18px] gap-6 font-normal ">
              <div>
                <h1 className="xl:text-[44px] md:text-[35px] text-[20px] font-semibold">
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
                    href="https://maps.google.com?q=Kausaltar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex xl:flex-row flex-col xl:items-center xl:gap-4"
                  >
                    <p className="md:hidden block text-[12px] text-[#9F9F9F]">
                      Address
                    </p>
                    <div className="flex gap-2 items-center">
                      <SlLocationPin className="h-[25px] w-[25px] md:block hidden" />
                      Kausaltar (Floor above Nepal Bank)
                    </div>
                  </a>
                </div>

                <div className="xl:text-[18px] text-[12px]">
                  <a
                    href="tel:+9779768921929"
                    className="flex xl:flex-row flex-col xl:items-center xl:gap-4"
                  >
                    <p className="md:hidden block text-[12px] text-[#9F9F9F]">
                      Contact
                    </p>
                    <div className="flex gap-2 items-center">
                      <HiOutlinePhone className="h-[25px] w-[25px] md:block hidden" />
                      +977-9768921929
                    </div>
                  </a>
                </div>

                <div className="xl:text-[18px] text-[12px]">
                  <a
                    href="mailto:info@nepalyouthclub.com"
                    className="flex xl:flex-row flex-col xl:items-center xl:gap-4"
                  >
                    <p className="md:hidden block text-[12px] text-[#9F9F9F]">
                      Email
                    </p>
                    <div className="flex gap-2 items-center">
                      <FiMail className="h-[25px] w-[25px] md:block hidden" />
                      info@nepalyouthclub.com
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className=" h-full flex justify-between items-center">
          {/* Quick Links */}
          <div className="md:flex flex-col xl:items-center items-start text-[18px] gap-6 hidden ms-4 xl:ms-0">
            <div className="font-medium">Quick Links</div>
            <ul className="flex flex-col xl:items-center items-start gap-3 font-light text-sm xl:text-xl">
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
          <div className="h-full flex flex-col py-4 justify-between md:items-center md:gap-2 gap-8 col-auto  ">
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
      <p className="text-center text-white/60 md:text-[12px] text-[7px] p-3">
        © 2025 Nepal Youth Club | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
