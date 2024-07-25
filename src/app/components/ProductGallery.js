'use client';

import React from 'react';

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
                        <img
                            src={image}
                            alt={`Product ${index + 1}`}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
