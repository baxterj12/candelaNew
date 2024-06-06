'use client'
import {React} from 'react';
import {useCart} from './../cart.js';
import "./myCart.css"
import { FaCircle } from "react-icons/fa6";

export default function DisplayItems() {
    const { removeFromCart, cartItems} = useCart();
    const totalCost = cartItems.reduce((total, item) => total + item.product.price, 0);

    return (
        <div className="itemsContainer">
            {cartItems.map((item, itemIndex) => (
                <div>
                <div className="singleItem">
                <React.Fragment key={index}>
                    <img src={item.product.images[0]} className="cartImage" alt={item.product.name} />
                    <p>{item.product.name}</p>
                    <div  style={{borderColor: 'black', borderWidth: '2px',
                    borderStyle: 'solid', borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', width: '36px', height: '36px', cursor: 'pointer'}}>
                        <FaCircle size={36} style={{ color: item.color }} />
                    </div>
                    <p>{item.size}</p>
                    <p>${item.product.price.toFixed(2)}</p>
                    <p style={{ color: 'red', cursor: 'pointer' }} onClick={() => removeFromCart(itemIndex)}>Remove Item </p>
                    <hr />
                </ React.Fragment>
                </div>
                 <div className="divider"/>
                </div>
            ))}
            <div className="totals">
                <p>Total Items: {cartItems.length}</p>
                <p>Total Cost: ${totalCost.toFixed(2)}</p>
            </div>
        </div>
    );
}