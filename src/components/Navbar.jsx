
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="bg-[#ff2c2c] shadow-md px-6 py-4 flex justify-between items-center relative z-50">
            {/* Logo */}
            <div className="font-bold text-2xl text-white">
                <Link to="/">Nepal Youth Club</Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 font-medium text-white">
                <Link to="/" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Home</Link>
                <Link to="/about" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">About</Link>
                {/* <Link to="/donate" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Donation</Link> */}
                <Link to="/gallery" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Gallery</Link>
                <Link to="/documentation" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Documentation</Link>
                <Link to="/contact" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Contact</Link>
            </div>



            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#ff2c2c] shadow-md flex flex-col md:hidden">
                   <Link to="/" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Home</Link>
                <Link to="/about" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">About</Link>
                {/* <Link to="/donate" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Donation</Link> */}
                <Link to="/gallery" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Gallery</Link>
                <Link to="/documentation" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Documentation</Link>
                <Link to="/contact" className="hover:bg-[#c30010] rounded px-2 py-2 hover:text-white transition-colors">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
