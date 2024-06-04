'use client'
import React, { useState } from 'react';
import './preorder.css';
import {  useCart } from './../../cart.js';

export default function Button({ product, selectedSize, clickedIndex}) {
    const { addToCart } = useCart();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const handleAddToCart = () => {
        addToCart(product, product.colors[clickedIndex], selectedSize);
        addToCart(product, product.colors[clickedIndex], selectedSize);
        setShowConfirmation(true);

        // Hide the confirmation after 3 seconds
        setTimeout(() => {
            setShowConfirmation(false);
        }, 1000);
      };

    return (
        <div className="buttonHolder">
            <button type="submit" className="button" onClick={handleAddToCart}>Add to Cart</button>
            {showConfirmation && <p className="confirmation">Item added to cart!</p>}
        </div>
    );
}