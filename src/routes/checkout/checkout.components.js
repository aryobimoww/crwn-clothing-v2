import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return <CheckoutItem cartItem={cartItem} key={id} />;
      })}
      <span className="total">Total: {cartTotal}$</span>
    </div>
  );
};
export default Checkout;
