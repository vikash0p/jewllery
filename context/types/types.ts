import { Dispatch } from "react";

// Define the payload for adding an item
export type addItemPayload = {
  id: string;
  name: string;
  price: number;
  size: string;
  imageUrl: string;
  quantity: number;
};

// Define the state type
export type CartState = {
  cart: addItemPayload[];
};

// Define action types
export type CartAction =
  | { type: "ADD_ITEM"; payload: addItemPayload } // Payload for adding an item
  | { type: "REMOVE_ITEM"; payload: addItemPayload } // Payload is the item ID for removal
  | { type: "INCREMENT_QTY"; payload: addItemPayload } // Payload is the item size for incrementing quantity
  | { type: "DECREMENT_QTY"; payload: addItemPayload } // Payload is the item size for decrementing quantity
  | { type: "INITIALIZE_CART"; payload: addItemPayload[] }; // Payload for initializing the cart

// Define the context type
export type CartContextType = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
};

// Define the children prop type for the context provider component
export type cartContextChildren = {
  children: React.ReactNode;
};
