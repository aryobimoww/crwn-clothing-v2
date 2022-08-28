import { createContext, useState, useEffect } from "react";
const addCartItem = (cartItems, productToAdd) => {
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
export const CartContext = createContext({
  toogle: false,
  setToogle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [toogle, setToogle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  useEffect(() => {
    const addItemCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(addItemCount);
  }, [cartItems]);
  const value = { toogle, setToogle, cartItems, addItemToCart, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
