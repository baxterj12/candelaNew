'use client'
import {React, useState} from 'react';
import {useCart} from './../cart.js';
import "./myCart.css"
import "./checkout.css"
import { FaCircle } from "react-icons/fa6";
import Checkout from "./checkout.js";

export default function DisplayItems() {
    const { removeFromCart, cartItems, clearCart} = useCart();
    const totalCost = cartItems.reduce((total, item) => total + item.product.price, 0);
    const [boolCheckout, setBoolCheckout]=useState(false);
    const [paymentLink, setPaymentLink] = useState('');

    const handleCheckout = async () => {
        try {
          const response = await fetch('../api/callingPaymentLink', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ totalCost })
          });
          const data = await response.json();
          setPaymentLink(data.paymentLink);
          setBoolCheckout(true);
        } catch (error) {
          console.error('Error creating payment link:', error);
        }
      };

    return (
        <div className="itemsContainer">
            {cartItems.map((item, itemIndex) => (
                <div key = {item}>
                <div className="singleItem">
                    <img src={item.product.images[0]} className="cartImage" alt={item.product.name} />
                    <p>{item.product.name}</p>
                    <div className = "circleOutline" style={{borderColor: 'black', borderWidth: '2px',
                    borderStyle: 'solid', borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', cursor: 'pointer'}}>
                        <FaCircle className="cartCircle" style={{ color: item.color }} />
                    </div>
                    <p>{item.size}</p>
                    <p>${item.product.price.toFixed(2)}</p>
                    <p style={{ color: 'red', cursor: 'pointer' }} onClick={() => removeFromCart(itemIndex)}>Remove Item </p>
                    <hr />
                </div>
                <div className="divider"/>
                </div>
            ))}
            <div className="totals">
                <p style={{ color: 'red', cursor: 'pointer' }} onClick={clearCart}>Clear Cart</p>
                <p>Total Items: {cartItems.length}</p>
                <p>Total Cost: ${totalCost.toFixed(2)}</p>
            </div>
            {cartItems.length>0 &&
                <div style={{ cursor: 'pointer' }} onClick={handleCheckout} className="checkoutButton">
                    <p>Check Out</p>
                </div>
            }
            {boolCheckout && paymentLink && (
                <div className="checkoutContainer">
                <a href={paymentLink} target="_blank" rel="noopener noreferrer">Complete Payment</a>
                </div>
            )}
        </div>
    );
}