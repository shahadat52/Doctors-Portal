import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [availableOptions, setAvailableOptions] = useState([])
    const [treatment, setTreatment] = useState(" ")

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAvailableOptions(data))
    }, [])
    return (
        <section>
            <h3 className='text-[22px] text-secondary text-center mt-60'>Available Services on {format(selectedDate, 'PP')}</h3>
            <h3 className='text-center text-gray-500 text-[22px] mt-2 mb-20 '>Please Select a Service</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-[100px] '>
                {
                    availableOptions.map(availableOption => <AvailableAppointment
                        key={availableOption.id}
                        availableOption={availableOption}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            <BookingModal
                treatment={treatment}
            />
        </section>
    );
};

export default AvailableAppointments;