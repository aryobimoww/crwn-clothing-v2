import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../catagories/category.types";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducers/reducer.utils";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  //find if cartItems contains producttoAdd
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found, increment quantity
  if (existingCartitem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  // find the cart item to remove
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if quantity is equal to 1 if it is remove that item from cart
  if (existingCartitem && existingCartitem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  //  return back cartitem when matching cart item with reduced quantitty
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export type SetToogle = ActionWithPayload<
  CART_ACTION_TYPES.SET_TOOGLE,
  boolean
>;

export type SetCartItem = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItem = withMatcher(
  (cartItem: CartItem[]): SetCartItem =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItem)
);

export const setToogle = withMatcher(
  (bool: boolean): SetToogle => createAction(CART_ACTION_TYPES.SET_TOOGLE, bool)
);

const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): SetCartItem => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItem(newCartItems);
};
export const removeItemToCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItem(newCartItems);
};
export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItem(newCartItems);
};
