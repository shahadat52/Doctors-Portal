import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData()
    console.log(booking);
    const { treatment} = booking
    const stripeKey = process.env.REACT_APP_stripe_key;
    console.log(stripeKey);
    const stripePromise = loadStripe(process.env.REACT_APP_stripe_key)
    return (
        <div>
            <h2 className="text-3xl font-bold mb-2">Payment</h2>
            <p className='text-lg'>Please pay <strong> ${booking.price} </strong> for your appointment on <span className='text-md font-bold'>{treatment}</span> </p>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;