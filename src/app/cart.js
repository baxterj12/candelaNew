import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

// Create a context for the cart
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const local_storage_value_str = localStorage.getItem('cartItems');
    if (local_storage_value_str) {
      return JSON.parse(local_storage_value_str);
    } else {
      return [];
    }
  });

  const [state, setState] = useState(null);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};