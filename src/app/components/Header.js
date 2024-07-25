'use client';

import React, { useState } from 'react';
import { FiInstagram, FiFacebook, FiMail, FiUser, FiShoppingCart, FiGlobe, FiSearch, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#a68e7f] text-white py-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center px-4">
                <span className="font-serif text-3xl">zerene</span>
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <FiGlobe />
                        <div className="relative">
                            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                                <span className="font-sans">EN</span>
                                <FiChevronDown className="ml-1" />
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-24 bg-[#a68e7f] text-white rounded shadow-lg">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#a68e7f]">EN</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#a68e7f]">ES</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#a68e7f]">FR</a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="hover:underline ml-4 text-sm">Shop</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="hover:text-gray-400 text-sm"><FiInstagram className="inline-block" /> zerene_official</a>
                        <a href="#" className="hover:text-gray-400 text-sm"><FiFacebook className="inline-block" /> facebook</a>
                        <a href="mailto:contact@zerene.com" className="hover:text-gray-400 text-sm"><FiMail className="inline-block" /> contact@zerene.com</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="p-2 bg-white rounded-full text-[#a68e7f]">
                            <FiShoppingCart className="cursor-pointer text-base" />
                        </div>
                        <div className="p-2 bg-white rounded-full text-[#a68e7f]">
                            <FiUser className="cursor-pointer text-base" />
                        </div>
                        <div className="p-2 bg-white rounded-full text-[#a68e7f]">
                            <FiSearch className="cursor-pointer text-base" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#a68e7f] text-white z-10">
                    <div className="flex flex-col items-center py-4">
                        <a href="#" className="hover:text-gray-400 text-sm py-2">zerene_official <FiInstagram className="inline-block ml-2" /></a>
                        <a href="mailto:contact@zerene.com" className="hover:text-gray-400 text-sm py-2">contact@zerene.com <FiMail className="inline-block ml-2" /></a>
                        <div className="flex items-center space-x-2 py-2">
                            <FiGlobe />
                            <div className="relative">
                                <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                                    <span className="font-sans">EN</span>
                                    <FiChevronDown className="ml-1" />
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-24 bg-[#a68e7f] text-white rounded shadow-lg">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#a68e7f]">EN</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#a68e7f]">ES</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#a68e7f]">FR</a>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="hover:underline ml-4 text-sm">Shop</a>
                        </div>
                        <div className="flex items-center space-x-4 py-2">
                            <div className="p-2 bg-white rounded-full text-[#a68e7f]">
                                <FiShoppingCart className="cursor-pointer text-base" />
                            </div>
                            <div className="p-2 bg-white rounded-full text-[#a68e7f]">
                                <FiUser className="cursor-pointer text-base" />
                            </div>
                            <div className="p-2 bg-white rounded-full text-[#a68e7f]">
                                <FiSearch className="cursor-pointer text-base" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
