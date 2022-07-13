import "./category.styles.scss";

const CategoryItems = ({ categories }) => {
  const { id, title, imageUrl } = categories;
  return (
    <div className="category-container" key={id}>
      {/* <img /> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container" key={id}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItems;
