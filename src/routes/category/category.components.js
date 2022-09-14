import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectorCategoriesMap,
  selectCategoriesLoading,
} from "../../store/catagories/category.selector";
import "./category.styles.scss";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.components";
import { Fragment } from "react/cjs/react.production.min";
import Spinner from "../../components/spinner/spinner.components";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectorCategoriesMap);
  const [products, setProducts] = useState([]);
  const isLoading = useSelector(selectCategoriesLoading);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
