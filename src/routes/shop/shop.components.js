import { useContext, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import CategoriesPreview from "../catagories-preview/categories-preview.components";
import "./shop.styles.scss";
import Category from "../category/category.components";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
