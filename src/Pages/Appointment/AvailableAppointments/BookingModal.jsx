import { format } from 'date-fns';
import React from 'react';
import Swal from 'sweetalert2'



const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const Swal = require('sweetalert2')
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const slot = form.slot.value
        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        console.log(name, phone, email,date,slot);
        Swal.fire(
            'Booked',
            '',
            'success'
          )
          setTreatment(null)
        form.reset();
        
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-12 grid grid-col-1 gap-6 text-gray-400'>
                        <input type="text" value={date} className="  input w-full input-bordered bg-[#E6E6E6] text-black" />
                        <select name='slot' className="select select-bordered w-full text-black bg-[#E6E6E6] ">

                            {
                                slots.map((slot, i) => <option  key={i} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder='Full Name' className="input w-full input-bordered " />
                        <input type="text" name='phone' placeholder='Phone Number' className="input w-full input-bordered " />
                        <input type="email" name='email' placeholder='Email Address' className="input w-full input-bordered " />
                        <button type='submit' className="btn btn-accent text-bold ">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;