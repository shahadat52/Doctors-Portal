import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_strip_pk);
const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Payment;
