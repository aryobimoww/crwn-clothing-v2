import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {
  const { toogle, setToogle, cartCount } = useContext(CartContext);
  const handleDropdown = () => {
    setToogle(!toogle);
  };

  return (
    <div className="cart-icon-container" onClick={handleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
