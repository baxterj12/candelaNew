import React, { createContext, useContext, useState } from 'react';

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

  const addToCart = (product, color, size) => {
    setCartItems([...cartItems, { product, color, size }]);
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};