import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { PaymentContainer } from "./Payment.style"


import CheckoutForm from '../../components/checkout-form/CheckoutForm';
const STRIPE_API = (process.env.REACT_APP_STRIPE_API)

const stripePromise = loadStripe(`${STRIPE_API}`);

export default function Payment() {
   

  return (
    <PaymentContainer>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>    
    </PaymentContainer>
  
  )
}
