// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setToogle } from "../../store/cart/cart.action";

const CartIcon = () => {
  const toogle = useSelector(selectCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    dispatch(setToogle(!toogle));
  };

  return (
    <CartIconContainer onClick={handleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
