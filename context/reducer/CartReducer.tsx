import { CartState,CartAction } from "../types/types";

const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    default:
      return state;
  }
};

export default CartReducer;


