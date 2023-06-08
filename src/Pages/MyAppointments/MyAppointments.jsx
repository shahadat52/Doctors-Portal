import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';

const MyAppointments = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
   if(bookings.length === 0){
    return <p className='text-center text-green-300'>You have no appointment</p>
   }
    return (
        <div>
            <p className='text-2xl font-bold mb-7'>My Appointments: {bookings.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>No</th>
                            <th>Name</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>TREATMENT</th>
                            <th>PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            bookings.map((booking, i) => <tr
                                key={i}>
                                <th>{i+1}</th>
                                <th>{booking.patient}</th>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.treatment}</td>
                                <td> <button className='btn btn-primary'>PAY</button> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;