import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import ReviewCards from './ReviewCards';



const PatientsSay = () => {
    return (
        <div>
            <div className='px-6 flex justify-between mb-36'>
            <div>
                <h5 className='text-secondary text-[20px] font-bold'>Testimonial</h5>
                <h3 className='text-4xl'>What Our Patients says</h3>
            </div>
            <div>
                <img src={quote} className='w-48 h-40 mt-[-40px] pr-12 ' alt="" />
            </div>
        </div>
        <ReviewCards></ReviewCards>
        </div>
    );
};

export default PatientsSay;