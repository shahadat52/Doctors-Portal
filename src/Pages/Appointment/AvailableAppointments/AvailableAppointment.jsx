import React from 'react';
import ButtonPrimary from '../../../Utilities/ButtonPrimary';

const AvailableAppointment = ({ availableOption, setTreatment }) => {
    const { name, slots } = availableOption
    return (
        <div className=' rounded-2xl w-[425px] h-[230px] shadow-md text-center mx-auto' >
            <h2 className='flex justify-center pt-10 text-xl font-bold text-secondary  '>{name}</h2>
            <h2 className='text-center my-2'> {slots.length > 0 ? slots[0] : 'Try another day'} </h2>
            <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
            <div onClick={() => setTreatment(availableOption)} className='justify-center flex pb-10 pt-4'><ButtonPrimary> <label

                htmlFor="booking-modal"
                className=""
            >BOOK APPOINTMENT</label></ButtonPrimary></div>
        </div>
    );
};

export default AvailableAppointment;