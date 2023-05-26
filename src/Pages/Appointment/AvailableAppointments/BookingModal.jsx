import { format } from 'date-fns';
import React from 'react';
import Swal from 'sweetalert2'



const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target
        const slot = form.slot.value
        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        console.log(slot, name, phone, email, date);
        Swal.fire(
            'Booked',
            '',
            'success'
          )
          setTreatment(null)
        form.reset()

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
                        <input name='date' type="text" value={date} readOnly className="input input-bordered w-full bg-gray-200"/>
                        <select name='slot' className="select select-bordered w-full bg-gray-200 " >
                            {

                                slots.map((slot, i) => <option key={i}  >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full " required />
                        <input type="submit" value="SUBMIT" className='btn btn-accent w-full' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;