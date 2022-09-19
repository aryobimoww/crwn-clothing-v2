import { CategoryItem } from "../catagories/category.types";
export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_TOOGLE = "cart/SET_TOOGLE",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
