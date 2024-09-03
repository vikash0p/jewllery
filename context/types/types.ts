import { JewelleryItem } from "@/utils/interface";
import { Dispatch } from "react";
// Define the state type
export type CartState = {
  cart: addItemPayload[];
};

export type addItemPayload = {
  id: string;
  name: string;
  price: number;
  size: string;
  imageUrl: string;
  quantity: number;
};
// Define action types
export type CartAction =
  | {
      type: "ADD_ITEM";
      payload: addItemPayload;
    }
  | { type: "REMOVE_ITEM",payload:string }
  | { type: "CLEAR_CART" };

// Define the context type
export type CartContextType = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
};



export type cartContextChildren = {
  children: React.ReactNode;
}