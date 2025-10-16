import logo from "../assets/logo.png";

import facebook from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
import instragram from "../assets/instagram.png";
import message from "../assets/message.png";
import phoneCall from "../assets/phone-call.png";
import pinMap from "../assets/pin-map.png";
import tikTok from "../assets/tik-tok.png";
import whatsApp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 bg-[#003893] text-white  p-16 w-full">
      {/* Left section */}
      <div className="flex gap-6">
        <div className="h-[70px] w-[70px]">
          <img
            src={logo}
            alt="footer logo of youth nepal club "
            className="h-full w-full"
          />
        </div>

        <div className=" flex flex-col text-[18px] gap-6  font-normal">
          <h1 className="text-[44px] font-semibold ">Nepal Youth Club</h1>

          <div className="flex flex-col gap-3">
            <div>
              <a href="" className="flex items-center gap-4">
                <div className="h-[25px] w-[25px]">
                  <img src={message} alt="gmail" className="h-full w-full" />
                </div>
                info@nepalyouthclub.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-[25px] w-[25px]">
                <img src={pinMap} alt="pin-map" className="h-full w-full" />
              </div>
              Kausaltar (Floor above Nepal Bank)
            </div>
            <div className="flex items-center gap-4">
              <div className="h-[25px] w-[25px]">
                <img
                  src={phoneCall}
                  alt="phonecall"
                  className="h-full w-full"
                />
              </div>
              +977-9768921929
            </div>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center text-[18px] gap-6 ">
          <div className="font-medium">Quick Links</div>
          <ul className="flex flex-col items-center gap-3">
            <li>Gallery</li>
            <li>Documentary</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col py-4 justify-between items-center gap-2">
          <div className="flex flex-col items-center gap-3">
            <div className="font-medium text-lg">Connect with us</div>
            <div className="flex gap-3 items-center text-[24px]">
              <a href="" className="h-[24px] w-[24px]">
                <img src={facebook} alt="facebook" className="h-full w-full" />
              </a>
              <a href="" className="h-[24px] w-[24px]">
                <img
                  src={instragram}
                  alt="instragram"
                  className="h-full w-full"
                />
              </a>
              <a href="" className="h-[24px] w-[24px]">
                <img src={tikTok} alt="tiktok" className="h-full w-full" />
              </a>
              <a href="" className="h-[24px] w-[24px]">
                <img src={whatsApp} alt="whatsapp" className="h-full w-full" />
              </a>
              <a href="" className="h-[24px] w-[24px]">
                <img src={gmail} alt="gmail" className="h-full w-full" />
              </a>
            </div>
          </div>
          <div className="text-[15px] text-center flex flex-col gap-2">
            <p>
              <a href="">Terms and Conditions</a>
            </p>
            <p>
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
