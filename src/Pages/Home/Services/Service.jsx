import React from 'react';

const Service = ({ service }) => {
    const { icon, name, description } = service
    return (

        <div className="mx-auto card w-96 bg-base-100 shadow-xl text-black text-center">
            <figure><img className='mt-11' src={icon} alt="images" /></figure>
            <div className="card-body">
                <h2 className="text-[20px] font-[600]">{name}</h2>
                <p className=''>{description}</p>

            </div>
        </div>
    );
};

export default Service;