// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.js";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {
  const { toogle, setToogle, cartCount } = useContext(CartContext);
  const handleDropdown = () => {
    setToogle(!toogle);
  };

  return (
    <CartIconContainer onClick={handleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
