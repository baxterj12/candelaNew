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
                <div style={{ cursor: 'pointer' }} onClick={() => setBoolCheckout(!boolCheckout)} className="checkoutButton">
                    <p>Check Out</p>
                </div>
            }
            {boolCheckout && <Checkout cost={totalCost} />}
        </div>
    );
}