import React from 'react';
import ButtonPrimary from '../../../Utilities/ButtonPrimary';

const AvailableAppointment = ({ availableOption }) => {
    const { name, slots } = availableOption
    return (
        <div className='rounded-2xl w-[425px] h-[230px] shadow-md text-center mx-auto' >
            <h2 className='flex justify-center  text-xl font-bold text-secondary  '>{name}</h2>
            <h2 className='text-center my-2'> {slots.length > 0 ? slots[0] : 'Try another day'} </h2>
            <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
            <div className='justify-center flex my-10'><ButtonPrimary>BOOK APPOINTMENT</ButtonPrimary></div>
        </div>
    );
};

export default AvailableAppointment;