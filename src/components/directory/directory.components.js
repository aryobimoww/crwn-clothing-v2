import CategoryItems from "../category-item/category.components";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItems categories={category} key={category.id} />
      ))}
    </div>
  );
};
export default Directory;
