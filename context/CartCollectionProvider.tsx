import React, { createContext,  useReducer ,FC} from "react";
import CartReducer from "./reducer/CartReducer";
import { CartState, CartContextType, cartContextChildren } from "./types/types";

// Define initial state
const initialState: CartState = {
  cart: [],
};

// Create context with a default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the provider component
const CartCollectionProvider:FC<cartContextChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(CartReducer, initialState);
  console.log("🚀 ~ file: CartCollectionProvider.tsx:17 ~ state:", state.cart.length);



  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartCollectionProvider;


