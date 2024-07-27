'use client';

import React from 'react';
import Image from 'next/image';

const CenteredImage = () => {
    return (
        <div className="w-full h-screen bg-[#fdf4e3] flex items-center justify-center">
            <div className="w-full max-w-4xl p-4">
                <Image src="/images/video image.PNG" alt="Centered Image" layout="responsive" width={700} height={475} className="object-cover" />
            </div>
        </div>
    );
};

export default CenteredImage;
