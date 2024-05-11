import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuthContext from "../../../../hooks/useAuthContext";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import './CheckoutForm.css'

const CheckoutForm = ({ selectedClassData, classPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuthContext();
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (classPrice > 0) {
            axiosSecure.post('/create-payment-intent', { classPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [classPrice, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false)
console.log(paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                classPrice,
                date: new Date(),
                selectedClassId: selectedClassData._id,
                enrolledClassId: selectedClassData.selectClassId                ,
                enrolledClassName: selectedClassData.className,
                enrolledClassImage: selectedClassData.image,
                availableSeats: selectedClassData.availableSeats,
                status : 'paid'
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Payment successful for ${selectedClassData.className} `,
                        })
                    }
                })
        }


    }

    return (
        <>
            <form className="w-96 m-8" onSubmit={handleSubmit}>
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
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <>
                <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>
                <Link to="/dashboard/enrolledClasses" >
                <button className="btn btn-md mx-8 bg-green-500 hover:bg-green-800 text-white mt-4" type="submit">
                    See Enrolled Classes
                </button>
                </Link>
            </>}
        </>
    );
};

export default CheckoutForm;