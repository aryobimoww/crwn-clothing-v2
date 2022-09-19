import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { FC } from "react";
import { CartItem as TcartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TcartItem;
};
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
