import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.components";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </div>
  );
};
export default Shop;
