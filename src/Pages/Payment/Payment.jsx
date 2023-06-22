import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_strip_pk);
const Payment = () => {
    const booking = useLoaderData()
    const { name, treatment, appointmentDate, slot, price } = booking;

    console.log(booking);
    return (
        <div>
            <h2 className='text-3xl font-bold '>Payment</h2>
            <p className="text-xl my-8">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking} />
            </Elements>
        </div>
    );
};

export default Payment;
