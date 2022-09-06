import DirectoryItems from "../directory-item/directory.components";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItems categories={category} key={category.id} />
      ))}
    </div>
  );
};
export default Directory;
