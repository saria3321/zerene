'use client';

import React from 'react';

const products = [
    {
        image: '/images/z1.PNG',
        name: 'Ylang Ylang - Lavender Room Spray',
        price: '79.00 USD'
    },
    {
        image: '/images/z2.PNG',
        name: 'Ylang Ylang - Lavender Aroma Roller',
        price: '39.00 USD'
    },
    {
        image: '/images/z3.PNG',
        name: 'Agarwood Room Spray',
        price: '79.00 USD'
    },
    {
        image: '/images/z4.PNG',
        name: 'Eternal Rose Gift Set (Red Rose)',
        price: '191.00 USD'
    },
    {
        image: '/images/z5.PNG',
        name: 'Eternal Rose Gift Set (White Rose)',
        price: '191.00 USD'
    },
    {
        image: '/images/z6.PNG',
        name: 'Agarwood Room Spray',
        price: '79.00 USD'
    }
];

const ProductList = () => {
    return (
        <div className="w-full" style={{ backgroundColor: '#fdf4e3', padding: '2rem' }}>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4" style={{ color: '#A58D78' }}>zerene</h1>
                <p className="text-xl" style={{ color: '#A58D78' }}>
                    Enchant and uplift your lifestyle with<br />
                    high-quality aromatic creations.
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                {products.map((product, index) => (
                    <div key={index} className="rounded-lg overflow-hidden text-center p-4 transform transition duration-300 hover:scale-105">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-gray-700 font-medium text-base">{product.name}</p>
                        <p className="text-gray-500 font-medium text-base">{product.price}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <p className="text-black text-lg font-bold">See All Products</p>
            </div>
        </div>
    );
};

export default ProductList;
