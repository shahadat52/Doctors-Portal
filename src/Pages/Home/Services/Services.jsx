import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import fluoride from '../../../assets/images/fluoride.png'
import Service from './Service';

const serviceData = [
    {
        id: 1,
        name: "Opening Hours",
        description: "Open 9:00 am to 5:00 pm everyday",
        icon: cavity,  
    }, {
        id: 2,
        name: "Opening Hours",
        description: "Open 9:00 am to 5:00 pm everyday",
        icon: whitening,
    }, {
        id: 3,
        name: "Opening Hours",
        description: "Open 9:00 am to 5:00 pm everyday",
        icon: fluoride,
    },
]

const Services = () => {
    return (
        <div>
            <div className='text-center mb-36'>
                <h3 className='text-[#19D3AE] font-extrabold text-[20px]'>Our Services</h3>
                <h2 className='font-medium text-[36px]'>Service We Provide</h2>
            </div>
            {
                serviceData.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;