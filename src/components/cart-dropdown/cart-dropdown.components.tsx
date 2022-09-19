import Button from "../button/button.components";
import CartItem from "../cart-item/cart-item.components";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>check out</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
