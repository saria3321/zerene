'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer bg-cover bg-center bg-[url('/images/footer-bg.jpg')] text-white text-center">
            <div className="footer-top bg-[#a68e7f] py-5 px-4">
                <p>Join our Zerene community of kindred spirits for special offers, learn about new product launches and receive 10% off your first order when you sign up!</p>
            </div>
            <div className="footer-middle py-10 md:py-20 px-4">
                <h2 className="text-[#a68e7f] text-2xl mb-4">Subscribe to our newsletter</h2>
                <p className="text-[#a68e7f] mb-8">Signup to receive news and updates</p>
                <form className="newsletter-form flex flex-col md:flex-row justify-center mb-8">
                    <input type="email" className="px-4 py-2 text-lg border-none rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full md:w-auto" placeholder="your-email@example.com" />
                    <button type="submit" className="px-8 py-2 text-lg bg-[#a68e7f] text-white rounded-b-lg md:rounded-r-lg md:rounded-b-none cursor-pointer w-full md:w-auto">Submit</button>
                </form>
                <div className="social-icons flex justify-center gap-4 md:gap-8">
                    <a href="#"><Image src="/images/facebook.png" alt="Facebook" width={24} height={24} className="w-6 h-6" /></a>
                    <a href="#"><Image src="/images/instagram.png" alt="Instagram" width={24} height={24} className="w-6 h-6" /></a>
                    <a href="#"><Image src="/images/whatsapp.png" alt="Whatsapp" width={24} height={24} className="w-6 h-6" /></a>
                </div>
            </div>
            <div className="footer-bottom px-4 py-4">
                <div className="footer-links flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-4">
                    <a href="#" className="text-white text-sm">Cookie Policy</a>
                    <a href="#" className="text-white text-sm">Privacy Policy</a>
                    <a href="#" className="text-white text-sm">Terms & Conditions</a>
                    <a href="#" className="text-white text-sm">Product Return Policy</a>
                </div>
                <p className="text-white text-sm">© 2023 ZERENE. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
