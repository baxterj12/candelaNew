'use client'
import React from 'react';
import {CartProvider } from './../cart.js';
import DisplayItems from './displayItems.js';
import TopBar from './../topBar.js';

export default function CartItems() {

    return (
        <div>
            <TopBar paramHelp="../"/>
            <h2>Cart Items</h2>
            <DisplayItems/>
        </div>
    );
}