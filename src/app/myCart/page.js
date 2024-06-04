'use client'
import React from 'react';
import {useCart } from './../cart.js';

export default function CartItems() {
    const { cartItems } = useCart();

    return (
        <div>
            <h2>Cart Items</h2>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <p>Product: {item.product.name}</p>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}