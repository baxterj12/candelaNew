'use client'
import React from 'react';
import {useCart } from './../cart.js';
import "./myCart.css"

export default function DisplayItems() {
    const { cartItems } = useCart();

    return (
        <div clasName="itemsContainer">
            {cartItems.map((item, index) => (
                <React.Fragment key={index}>
                <div className="singleItem">
                    <img src={item.product.images[0]} className="cartImage" alt={item.product.name} />
                    <p>{item.product.name}</p>
                    <p>Color: {item.color}</p>
                    <p>{item.size}</p>
                    <p>${item.product.price.toFixed(2)}</p>
                    <p>Remove Item</p>
                    <hr />
                </div>
                 <div className="divider"/>
                </React.Fragment>
            ))}
        </div>
    );
}