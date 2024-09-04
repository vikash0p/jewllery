import { JewelleryItem } from "@/utils/interface";
import { IdCard } from "lucide-react";
import { Dispatch } from "react";

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
  | { type: "ADD_ITEM"; payload: addItemPayload }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREMENT_QTY"; payload: string }
  | { type: "DECREMENT_QTY"; payload: string }
  | {type:'INITIALIZE_CART'; payload:addItemPayload[]};

// Define the context type
export type CartContextType = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
};



export type cartContextChildren = {
  children: React.ReactNode;
}