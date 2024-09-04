'use client'
import React, { createContext, useReducer, useEffect, FC } from "react";
import CartReducer from "./reducer/CartReducer";
import { CartState, CartContextType, cartContextChildren } from "./types/types";

// Define initial state
const initialState: CartState = {
  cart: [],
};

// Create context with a default value
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Define the provider component
const CartCollectionProvider: FC<cartContextChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Initialize state from localStorage when the component is mounted
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      dispatch({ type: "INITIALIZE_CART", payload: parsedCart });
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (state.cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } else {
      localStorage.removeItem("cart"); // Clear localStorage if the cart is empty
    }
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartCollectionProvider;
