'use client';

import React from 'react';

const CenteredImage = () => {
    return (
        <div className="w-full h-screen bg-[#fdf4e3] flex items-center justify-center">
            <div className="w-full max-w-4xl p-4">
                <img src="/images/video image.PNG" alt="Centered Image" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default CenteredImage;
