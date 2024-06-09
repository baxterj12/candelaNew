'use client'
import {React, useState} from 'react';
import "./checkout.css"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { submitPayment } from "./../actions/actions";

export default function Checkout({cost}) {
    const appID='sandbox-sq0idb-sVcL3E16iZfX7R-Rb0Xjkg';
    const locationID="LJPZEJ6EXFBFC";
    const [paymentStatus, setPaymentStatus]=useState('idle');
    return (
        <div className='checkoutContainer'>
            <PaymentForm
            applicationId={appID}
            locationId={locationID}
            cardTokenizeResponseReceived={async (token) => {
                const result = await submitPayment(token.token,cost);
                console.log(result);
                setPaymentStatus(result);
            }}
            >
            <CreditCard className="cardDetails"/>
            </PaymentForm>
            <p>Payment status: {paymentStatus}</p>
            </div>
      );
}