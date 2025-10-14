
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#ff2c2c] text-gray-300 py-8 mt-12 ">

            <div className="flex flex-col md:flex-row justify-between items-center p-4  text-white">

                {/* Doctor App Details */}
                <div className="flex-1 text-center mx-10 md:text-left">

                    <h3 className="text-white font-semibold mb-4 text-lg">Nepal Youth Club</h3>

                    <p className="text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea facilis minus, earum eos dolor nobis ipsum fugiat, deleniti eum soluta nam. Aliquid ad necessitatibus excepturi explicabo id hic enim vitae.
                    </p>

                </div>

                {/* Quick Links */}
                <div className="flex-1 text-center md:text-center mt-3">

                    <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>

                    <ul className="space-y-2 text-center">
                        <li>
                            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
                        </li>
                        <li>
                            <Link to="/donate" className="hover:text-gray-600 transition-colors">Donation</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="hover:text-gray-600 transition-colors">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Developing Company & Social Links */}
                <div className="flex-1  text-center md:text-right mb-10">

                    <h3 className="text-white font-semibold mb-4 text-lg">Nepal Youth Club</h3>

                    <p className="mb-4">&copy; {new Date().getFullYear()} Nepal Youth Club - All rights reserved.</p>

                    <div className="flex justify-center md:justify-end space-x-4 text-xl">

                        <a href="https://github.com/hehehehe" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaGithub />
                        </a>
                        <a href="https://facebook.com/talai kina dim" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com/banakai xaina saley" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/thaxainamalai" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaTwitter />
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
