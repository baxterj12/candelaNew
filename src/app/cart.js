import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context for the cart
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function removeFromCart(index) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }

  function clearCart(){
    setCartItems([]);
  }

  const addToCart = (product, color, size) => {
    setCartItems([...cartItems, { product, color, size }]);
  };

  const checkout = async () => {
    try {
      const totalCost = cartItems.reduce((total, item) => total + item.product.price, 0);
      const response = await axios.post('/api', {cartItems: cartItems, totalCost: totalCost});
      window.location.href = response.data.url;
    } catch (error) {
      console.error("error in cart async: ", error);
      alert('Something went wrong during checkout');
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, addToCart, clearCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
};