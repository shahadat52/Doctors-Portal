import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <div>
            <h3 className='text-[22px] text-secondary text-center mt-60'>Available Services on {format(selectedDate, 'PP')}</h3>
            <h3 className='text-center text-[22px] mt-2 '>Please Select a Service</h3>
        </div>
    );
};

export default AvailableAppointment;