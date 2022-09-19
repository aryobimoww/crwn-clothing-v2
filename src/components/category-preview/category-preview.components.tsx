import { FC } from "react";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.components";
import { CategoryItem } from "../../store/catagories/category.types";
type CategoryPreviewPops = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewPops> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
