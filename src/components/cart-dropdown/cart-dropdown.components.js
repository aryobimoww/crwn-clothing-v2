import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.components";
import CartItem from "../cart-item/cart-item.components";
import "./cart-dropdown.styles.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.js";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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
