import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";
const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.toogle
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
// const newCartCount = newCartItems.reduce(
//   (total, cartItem) => total + cartItem.quantity,
//   0
// );
// const newCartTotal = newCartItems.reduce(
//   (total, cartItem) => total + cartItem.quantity * cartItem.price,
//   0
// );
