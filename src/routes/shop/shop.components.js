import { useEffect, useContext, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import CategoriesPreview from "../catagories-preview/categories-preview.components";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import "./shop.styles.scss";
import Category from "../category/category.components";
import { fetchCategoriesAsync } from "../../store/catagories/category.action";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
