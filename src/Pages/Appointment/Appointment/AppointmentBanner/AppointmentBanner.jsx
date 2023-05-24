import React, { useState } from 'react';
import dentistChair from '../../.././../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div>
            <div className=" hero-content flex-col justify-between lg:flex-row-reverse">
                <img alt='' src={dentistChair} className="lg:w-1/2 sm:h-[225px] lg:h-[335px]  rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    />
                <p>You picked {format(selectedDate, 'PP')}</p>

                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;