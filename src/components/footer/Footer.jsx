import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin, FaVimeo } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#0F0E0E] relative -mt-20 py-28 ">
            <div className="w-11/12 mx-auto">
                <footer className="text-white py-10">
                    <div className="flex flex-col lg:flex-row gap-10 flex-wrap justify-between lg:gap-20">
                        {/* Brand Section */}
                        <div className="flex-1 sm:w-full">
                            <h3 className="text-xl font-bold flex items-center mb-4 gap-2">
                                <span>
                                    <img
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732460457/icon_n0ychp.png"
                                        alt="logo"
                                        className="w-8 h-8"
                                    />
                                </span>
                                Monks Estate
                            </h3>

                            <p className="text-sm mb-4 text-justify ">
                                We are your personal real estate navigator, guiding you to your dream property with  expert advice.
                            </p>
                            <form className="flex items-center    overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex-1 bg-black text-white px-4 py-2 border border-gray-500 outline-none"
                                />
                                <button
                                    type="submit"
                                    className=" text-white border border-[#FF5B28]   ml-2 px-4 py-2  transition"
                                >
                                    Subscribe
                                </button>
                            </form>


                        </div>

                        {/* Links Section */}
                        <div className="flex-1 sm:w-full">
                            <h4 className="text-lg font-semibold mb-4">Links</h4>
                            <ul className="text-gray-400 text-sm space-y-2">
                                <li>
                                    <Link to="" className="hover:text-[#FF5B28]">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="hover:text-[#FF5B28]">
                                        Properties
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="hover:text-[#FF5B28]">
                                        Property Details
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="hover:text-[#FF5B28]">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Information Section */}
                        <div className="flex-1 sm:w-full">
                            <h4 className="text-lg font-semibold mb-4">Information</h4>
                            <ul className="text-gray-400 text-sm space-y-2">
                                <li>
                                    <Link to="" className="hover:text-white">
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="hover:text-white">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="hover:text-white">
                                        404
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="flex-1 sm:w-full">
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <p className="text-gray-400 text-sm mb-4">+012 345-67890</p>
                            <p className="text-gray-400 text-sm mb-4">hello@designmonks.co</p>
                            <div className="flex space-x-2">
                                <Link
                                    to=""
                                    className="text-2xl text-gray-400 hover:text-white hover:bg-[#FF5B28] p-2 rounded transition-colors duration-300"
                                >
                                    <FaTwitter />
                                </Link>
                                <Link
                                    to=""
                                    className="text-2xl text-gray-400 hover:text-white hover:bg-[#FF5B28] p-2 rounded transition-colors duration-300"
                                >
                                    <FaFacebook />
                                </Link>
                                <Link
                                    to=""
                                    className="text-2xl text-gray-400 hover:text-white hover:bg-[#FF5B28] p-2 rounded transition-colors duration-300"
                                >
                                    <FaLinkedin />
                                </Link>
                                <Link
                                    to=""
                                    className="text-2xl text-gray-400 hover:text-white hover:bg-[#FF5B28] p-2 rounded transition-colors duration-300"
                                >
                                    <FaVimeo />
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* Subscribe Section */}

                    <p className="text-sm text-center mt-16 ">
                        2024 &copy; Design Monks. All rights reserved.
                    </p>

                </footer>
            </div>
        </div>
    );
};

export default Footer;
