'use client'
import React from 'react';
import {useCart } from './../cart.js';
import "./myCart.css"

export default function DisplayItems() {
    const { cartItems } = useCart();

    return (
        <div className="cartDisplay">
            {cartItems.map((item, index) => (
                <div key={index}>
                    <p>Product: {item.product.name}</p>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                    <p>Price: {item.product.price}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}