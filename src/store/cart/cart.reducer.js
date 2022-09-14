import { CART_ACTION_TYPES } from "./cart.types";
export const INITIAL_STATE = {
  toogle: false,
  cartItems: [],
};
export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_TOOGLE:
      return {
        ...state,
        toogle: payload,
      };
    default:
      return state;
  }
};
