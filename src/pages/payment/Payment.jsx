import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
// import "./Payment.css"
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../components/checkout-form/CheckoutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MJN32EMtWQJBktQhPyDdZ60OoFBI0kztHiUQhlRhCpPVano2fcimdaYbSyDMON1jrsWEU4zKaqOdqtrYE3a5m7H00nV6TyBx5");

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'night',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

