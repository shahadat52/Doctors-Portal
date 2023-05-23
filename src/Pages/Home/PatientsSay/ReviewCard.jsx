import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, image, location, text } = review
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 bg-base-100 shadow-lg rounded-lg mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">

                <div className="p-4 text-justify text-[16px] dark:text-gray-400">
                    {text}
                </div>
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">

                        {/* <div className="avatar">
                            <div className="w-24 ring ring-secondary ring-offset-base-100 ring-offset-2 rounded-full">
                                <img src={image}  alt='' />
                            </div>
                        </div> */}
                        <div className='ring ring-secondary ring-offset-base-100 ring-offset-2 rounded-full'>
                            <img src={image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{name}</h4>
                            <span className="text-xs dark:text-gray-400">{location}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;