import { CartState, CartAction } from "../types/types";

const CartReducer = (state: CartState, action: CartAction): CartState => {
  const { cart } = state;

  switch (action.type) {
    case "ADD_ITEM": {
      const existItem = cart.find((item) => item.id === action.payload.id);
      const existSize = cart.find((item) => item.size === action.payload.size);
      if (existItem && existSize) {
        // If item already exists, increment its quantity
        return {
          ...state,
          cart: cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If item doesn't exist, add it to the cart
        return {
          ...state,
          cart: [...cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case "REMOVE_ITEM": {
  return {
    ...state,
    cart: state.cart.filter(
      (item) => !(item.id === action.payload.id && item.size === action.payload.size)
    ),
  };
}


    case "INCREMENT_QTY": {
      return {
        ...state,
        cart: cart.map((item) =>
          item.size === action.payload && item.quantity < 10
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREMENT_QTY": {
      return {
        ...state,
        cart: cart.map((item) =>
          item.size === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }


    default:
      return state;
  }
};

export default CartReducer;
