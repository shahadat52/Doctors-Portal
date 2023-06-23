import React from 'react';
import quote from '../../assets/icons/quote.svg'
import toast, { Toaster } from 'react-hot-toast';
import ReviewCards from '../Home/PatientsSay/ReviewCards';

const Reviews = () => {
    const notify = () => toast('Here is your toast.');
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

export default Reviews;