import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import PaymentForm from "../../components/payment-form/payment-form.components";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return <CheckoutItem cartItem={cartItem} key={id} />;
      })}
      <Total className="total">Total: {cartTotal}$</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};
export default Checkout;
