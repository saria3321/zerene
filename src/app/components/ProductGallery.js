'use client';

import React from 'react';
import Image from 'next/image';

const ProductGallery = () => {
    const images = [
        '/images/b1.PNG',
        '/images/b2.PNG',
        '/images/b3.PNG',
        '/images/b4.PNG',
    ];

    return (
        <div className="w-full bg-[#fdf4e3] py-8">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center">
                        <Image
                            src={image}
                            alt={`Product ${index + 1}`}
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
