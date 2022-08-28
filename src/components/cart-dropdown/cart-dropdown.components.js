import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.components";
import CartItem from "../cart-item/cart-item.components";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>check out</Button>
    </div>
  );
};
export default CartDropdown;
