import { useContext, Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import Spinner from "../../components/spinner/spinner.components";
import {
  selectorCategoriesMap,
  selectCategoriesLoading,
} from "../../store/catagories/category.selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectorCategoriesMap);
  const isLoading = useSelector(selectCategoriesLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
