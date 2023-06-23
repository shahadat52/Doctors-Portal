import React from 'react';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png'
import fluoride from '../../assets/images/fluoride.png'
import Service from '../Home/Services/Service';

const About = () => {
    const serviceData = [
        {
            id: 1,
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem expedita quos sunt minus deserunt",
            icon: cavity,
        }, {
            id: 2,
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem expedita quos sunt minus deserunt",
            icon: whitening,
        }, {
            id: 3,
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem expedita quos sunt minus deserunt",
            icon: fluoride,
        },
    ]
    return (
        <div>
            <div className='text-center mb-36'>
                <h3 className='text-[#19D3AE] font-extrabold text-[20px]'>Our Services</h3>
                <h2 className='font-medium text-[36px]'>Service We Provide</h2>
            </div>
            <div className='grid gap-4 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 text-white'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default About;