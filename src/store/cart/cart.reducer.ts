import { AnyAction } from "redux";

import { setCartItem, setToogle } from "./cart.action";

import { CartItem } from "./cart.types";
export type CartState = {
  readonly toogle: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  toogle: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction) => {
  if (setToogle.match(action)) {
    return { ...state, toogle: action.payload };
  }
  if (setCartItem.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;

  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };
  //   case CART_ACTION_TYPES.SET_TOOGLE:
  //     return {
  //       ...state,
  //       toogle: payload,
  //     };
  //   default:
  //     return state;
  // }
};
