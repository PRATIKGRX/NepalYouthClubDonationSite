import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <main>
      <section className="px-12 py-15">
        <p className="text-[36px] font-medium mb-6">Get in Touch with Us</p>
        <div className="grid grid-cols-2 gap-6">
          <div className=" border border-[#FF201A] rounded-[5px] px-8 py-4 flex flex-col gap-5">
            <p className="text-[32px] font-medium">Message Us</p>
            <input
              type="text"
              placeholder="Your Name"
              className="text-[20px] py-3 px-5 border border-[#8C8484] rounded-[10px] focus:outline-1 focus:outline-[#FF201A] "
            />
            <input
              type="email"
              className="text-[20px] py-3 px-5 border border-[#8C8484] rounded-[10px] focus:outline-1 focus:outline-[#FF201A]"
              placeholder="Your Email"
            />
            <textarea
              name=""
              className="text-[20px] py-3 px-5 border border-[#8C8484] rounded-[10px] focus:outline-1 focus:outline-[#FF201A] resize-none h-50"
              placeholder="Your Message"
              id=""
            ></textarea>
            <div>
              <button className="bg-[#DC241F] text-white text-[22px] px-4 py-2 rounded-[5px]">
                Send Message
              </button>
            </div>
          </div>
          <div className="h-full p-8 py-10 relative bg-blue-500/10 z-5">
            <img
              src="tabicon.png"
              alt="nepalyouth club logo"
              className="absolute inset-0 opacity-20 z-4 w-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="realtive z-10 h-full flex flex-col justify-between">
              <p className="md:text-[32px] text-lg font-medium">
                Other ways to Connect
              </p>
              <div className="flex flex-col justify-between gap-20">
                <div className="flex flex-col gap-10 text-[20px] px-10">
                  <p className="flex gap-8 items-center">
                    <IoMail className="text-white text-3xl bg-[#DC241F] p-1 rounded-full" />
                    info@nepalyouthclub.com
                  </p>
                  <p className="flex gap-8 items-center">
                    <IoMdCall className="text-white text-3xl bg-[#DC241F] p-1 rounded-full" />
                    +977-9768921929
                  </p>
                  <p className="flex gap-8 items-center">
                    <FaLocationDot className="text-white text-3xl bg-[#DC241F] p-1 rounded-full" />
                    Kausaltar (Floor above Nepal Bank)
                  </p>
                </div>
                <div className="text-4xl flex justify-center gap-6">
                  <FaFacebook className="fill-[#2A5EAD]" />
                  <IoLogoInstagram className="text-white text-2xl bg-[#2A5EAD] h-9  w-9 px-2 rounded-full" />

                  <FaTiktok className="text-white text-2xl bg-[#2A5EAD] h-9  w-9 px-2 rounded-full" />
                  <FaXTwitter className="text-white text-2xl bg-[#2A5EAD] h-9  w-9 px-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <section className="px-12 py-15">
        <p className="text-[36px] font-medium">OUR LOCATION</p>
        <div className="aspect-video w-full mt-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.765441154589!2d85.35997149017055!3d27.67456370480508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a10864e25b3%3A0x33c07b351b6b23c!2sKausaltar%2C%20Madhyapur%20Thimi%2044600!5e0!3m2!1sen!2snp!4v1762948594703!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contact;
