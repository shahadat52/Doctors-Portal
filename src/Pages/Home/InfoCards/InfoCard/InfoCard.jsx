import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card
    return (
        <div className={`flex flex-col lg:flex-row items-center rounded-lg p-8 lg:p-10 mx-auto mt-[-60px] mb-[131px] text-white w-[450px] h-[190px] ${bgClass}`}>
            <img src={icon} alt="Card" className="w-12 h-12 lg:w-20 lg:h-20 rounded-md" />

            <div className="ml-4 lg:ml-8">
                <h2 className=" lg:text-xl font-extrabold text-[40px]">{name}</h2>
                <p className="text-sm lg:text-base">{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;