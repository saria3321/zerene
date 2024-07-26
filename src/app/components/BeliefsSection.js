'use client';

import React from 'react';

const BeliefsSection = () => {
    return (
        <div className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/spray.PNG)' }}>
            <div className="absolute inset-0 bg-[#39291A] opacity-50"></div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-8 relative z-10">
                <div className="w-full md:w-1/2 text-white py-8 text-center md:text-left md:pr-8">
                    <h3 className="text-lg mb-2" style={{ color: '#a68e7f' }}>Our Beliefs</h3>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Zerene crafts immersive sensory experiences and transforms everyday spaces into sanctuaries of tranquility.</h1>
                    <div className="border-b border-white w-16 mb-4 mx-auto md:mx-0"></div>
                </div>
                <div className="w-full md:w-1/2 text-white py-8 text-center md:text-left md:pl-8">
                    <p className="text-sm md:text-lg">Our beliefs amplify the brand's vision, establishing its core principles, moulding its culture, and directing every decision and action we take.</p>
                </div>
            </div>
        </div>
    );
};

export default BeliefsSection;
