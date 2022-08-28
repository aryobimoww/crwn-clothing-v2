import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
  toogle: false,
  setToogle: () => false,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [toogle, setToogle] = useState(false);
  const value = { products, toogle, setToogle };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
