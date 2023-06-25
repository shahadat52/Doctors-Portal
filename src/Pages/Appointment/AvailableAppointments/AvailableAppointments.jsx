import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import DnaLoader from '../../../Utilities/DnaLoader';
import { AuthContext } from '../../../Context/AuthContext';

const AvailableAppointments = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)

    // treatment is just another name of appointment option it contain name,_id,slots 
    const [treatment, setTreatment] = useState(null)

    const { data: availableOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://doctors-portal-server-omega-smoky.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    // Using async await
    // const {data: availableOptions = [] } = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: async() => {
    //         const res = await fetch('https://doctors-portal-server-omega-smoky.vercel.app/appointmentOptions')
    //         const data = await res.json()
    //         return data
    //     }

    // })

    // Using fetch
    // const { data: availableOptions = [] } = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: () => fetch('https://doctors-portal-server-omega-smoky.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    // })

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-omega-smoky.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAvailableOptions(data))
    // }, [])
    if (isLoading) {
        return <DnaLoader />

    }

    return (
        <section>
            <h3 className='text-[22px] text-secondary text-center mt-60'>Available Services on {format(selectedDate, 'PP')}</h3>
            <h3 className='text-center text-gray-500 text-[22px] mt-2 mb-20 '>Please Select a Service</h3>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-[100px] '>

                {
                    availableOptions.map(availableOption => <AvailableAppointment
                        key={availableOption._id}
                        availableOption={availableOption}
                        setTreatment={setTreatment}

                    />)
                }
            </div>
            {
                treatment && user && <BookingModal
                treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            refetch={refetch}
                ></BookingModal>
            }
        </section >
    );
};

export default AvailableAppointments;