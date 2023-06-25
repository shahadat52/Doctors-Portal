import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';
import DnaLoader from '../../Utilities/DnaLoader';

const CheckoutForm = ({ booking }) => {
    const { price, _id, patient, email } = booking;
    const [clientSecret, setClientSecret] = useState("")
    const [cardError, setCardError] = useState("");
    const [transaction, setTransaction] = useState("")
    const [processing, setProcessing] = useState(false)

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {

        fetch("https://doctors-portal-server-omega-smoky.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [booking]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCardError('')
        setTransaction('')
        setProcessing(true)
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setProcessing(false)
            setCardError(error.message)
            console.log('[error]', error);
        }
        else (
            console.log('[paymentMethod]', paymentMethod)
        );

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            setProcessing(false)
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            const paymentInfo = {
                price,
                transactionId: paymentIntent.id,
                email,
                name: patient,
                bookingId: _id

            }
            fetch('https://doctors-portal-server-omega-smoky.vercel.app/payment', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    setTransaction(paymentIntent.id)
                    toast.success('payment successful')
                    setProcessing(false)
                    console.log(data);
                })
                .catch(error => {
                    setProcessing(false)
                    setCardError(error.message)
                    console.error('Error:', error);
                });

        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className='mt-10'
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
            <button type="submit" className='btn btn-sm btn-primary mt-5' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {
                transaction && <>
                    <p className='text-green-500 font-semibold text-xl'>Congratulation Your payment successful</p>
                    <p>Transaction Id is <strong>{transaction}</strong></p>
                </>
            }
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
            {
                processing && <DnaLoader />
            }
        </form>
    );
};

export default CheckoutForm;
