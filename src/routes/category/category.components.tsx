import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectorCategoriesMap,
  selectCategoriesLoading,
} from "../../store/catagories/category.selector";
import { CategoryContainer, Title } from "./category.styles";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.components";
import { Fragment } from "react";
import Spinner from "../../components/spinner/spinner.components";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectorCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesLoading);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title className="category-title">{category}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
