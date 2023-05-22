import React from 'react';

const Service = ({ service }) => {
    const { icon, name, description } = service
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-8">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={icon}
                        alt="Product"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 md:ml-8">
                    <h2 className="text-3xl font-bold mb-4">{name}</h2>
                    <p className="text-gray-800 mb-4">
                        {description}
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;