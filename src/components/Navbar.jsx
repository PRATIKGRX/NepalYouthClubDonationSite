import { useState, useEffect } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const trigger = window.innerHeight * 0.5; // 50% of the viewport height

      // Only update state when crossing the threshold
      if (scrollY > trigger && !isFixed) {
        setIsFixed(true);
      } else if (scrollY <= trigger && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  const NavbarContent = () => (
    <div className="h-[65px] flex justify-between w-full items-center">
      <div>
        <img
          src="src/assets/logo.png"
          alt="Logo"
          className="h-[65px] w-[65px]"
        />
      </div>
      <ul className="flex gap-4 items-center text-[20px]">
        <li className="text-[#DC241F]">Home</li>
        <li>Gallery</li>
        <li>About</li>
        <li>Documentation</li>
        <li>Contact Us</li>
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
      {/* Original navbar (in flow) */}
      <nav className="h-[94px] bg-white flex items-center px-10 relative z-10">
        <NavbarContent />
      </nav>

      {/* Fixed navbar with animation */}
      <nav
        className={`h-[94px] bg-white flex items-center px-10 fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300 ease-in-out
          ${isFixed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
      >
        <NavbarContent />
      </nav>
    </>
  );
};

export default Navbar;
