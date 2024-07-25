'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Hide the forward and back arrows
    };

    const images = [
        "/images/s17.jpg",
        "/images/z3.PNG",
        "/images/z6.PNG"
    ];

    return (
        <div className={`relative h-screen flex justify-center items-center ${isScrolled ? '' : 'bg-[#a68e7f]'}`} style={isScrolled ? { backgroundImage: "url('/images/footer-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
            <Slider {...settings} className="w-[800px] h-[450px]">
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex justify-center items-center">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="object-cover w-[800px] h-[450px]"
                        />
                    </div>
                ))}
            </Slider>
            <div
                className="absolute left-12 bottom-35 flex flex-col p-4 bg-hero-pattern bg-cover bg-center"
            >
                <h1 className="text-white text-5xl font-bold mb-2">Scent for</h1>
                <h1 className="text-white text-5xl font-bold mb-4">Serenity</h1>
                <p className="text-white text-xl">A home away from home</p>
            </div>
            <CookieConsentBanner isScrolled={isScrolled} />
        </div>
    );
};

const CookieConsentBanner = ({ isScrolled }) => {
    return (
        <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg shadow-lg border transition-all duration-300
                ${isScrolled ? 'bg-white border-gray-200' : 'bg-[#fdf4e3] bg-opacity-80 border-gray-200'}`}
            style={{ width: '90%', maxWidth: '800px' }}
        >
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-2 sm:mb-0">
                    <span className="text-2xl mr-2">🍪</span>
                    <p className="text-sm text-gray-800">
                        Our website uses cookies. By continuing navigating, we assume your permission to deploy cookies as detailed in our
                        <a href="#" className="underline text-blue-600 ml-1">Cookie Policy</a> &
                        <a href="#" className="underline text-blue-600 ml-1">Privacy Policy</a>.
                    </p>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-[#a68e7f] text-white py-1 px-4 rounded-lg">Accept</button>
                    <button className="bg-white text-[#a68e7f] border border-[#a68e7f] py-1 px-4 rounded-lg">Decline</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;