import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';
import DnaLoader from '../../Utilities/DnaLoader';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transaction, setTransaction] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()


    const stripe = useStripe();
    const elements = useElements();

    const { patient, price, email, _id } = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );
        if (!paymentIntent) {
            setCardError(confirmError.message)
            setProcessing(false)
            setSuccess('')
            return
        }
        if (paymentIntent.status === 'succeeded') {

            const paymentInfo = {
                price,
                transactionId: paymentIntent.id,
                email,
                name: patient,
                bookingId: _id

            }
            fetch('http://localhost:5000/payment', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setTransaction(paymentIntent.id)
                    setSuccess(paymentIntent.status)
                    toast.success('Status Updated')
                    navigate('/dashboard')

                })

        }


        setProcessing(false)
        console.log(paymentIntent);
        console.log(confirmError);
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary btn-sm mt-2' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {
                processing && <DnaLoader />
            }
            {
                success && <>
                    <p className='text-green-500'>Congratulation your payment successful </p>
                    <p>Transaction Id {transaction}</p>
                </>
            }
            <p className="text-red-500">{cardError}</p>
        </form>
    );
};

export default CheckoutForm;
