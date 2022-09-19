import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import CategoriesPreview from "../catagories-preview/categories-preview.components";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import "./shop.styles";
import Category from "../category/category.components";
import { fetchCategoryStart } from "../../store/catagories/category.action";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
