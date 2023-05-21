import React from 'react';
import chair from '../../../../src/assets/images/chair.png'
import backgroundImage from '../../../assets/images/bg.png'


const Banner = () => {
    return (
        <div className="hero pb-[223px]  " style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className=" hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={chair} className="w-1/2 sm:h-[225px] lg:h-[335px]  rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-[700]">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;