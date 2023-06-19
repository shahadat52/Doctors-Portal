import { format } from 'date-fns';
import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Context/AuthContext';
import { toast } from 'react-hot-toast';
import DnaLoader from '../../../Utilities/DnaLoader';



const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user, loader, setLoader } = useContext(AuthContext)
    const { name, slots, price } = treatment
    const date = format(selectedDate, 'PP')

    console.log(price);
    const handleBooking = (event) => {
        setLoader(true)
        event.preventDefault();
        const form = event.target
        const slot = form.slot.value
        const patientName = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        console.log(slot, name, phone, email, date);

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
            price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    console.log(data);
                    setLoader(false)
                    setTreatment(null)
                    console.log(booking);
                    // Swal.fire('Booking confirm', '', 'success')
                    toast.success('Booking Successfully')
                    form.reset()
                    refetch()

                }

                else {
                    setTreatment(null)
                    toast.error(data.message)
                    setLoader(false)
                }
            })
            .catch((error) => {
                console.error(error);
            });


    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold mb-12 ">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-7'>
                        <input name='date' type="text" value={date} readOnly className="input input-bordered w-full bg-gray-200" />
                        <select name='slot' className="select select-bordered w-full bg-gray-200 " >
                            {

                                slots.map((slot, i) => <option key={i}  >{slot}</option>)
                            }
                        </select>
                        {
                            loader && <DnaLoader />
                        }
                        <input type="text" name='name' defaultValue={user.displayName} placeholder="Your Name" className="input input-bordered w-full" disabled />
                        <input type="email" name='email' defaultValue={user.email} placeholder="Email" className="input input-bordered w-full " disabled required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="submit" value="SUBMIT" className='btn btn-accent w-full' />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;