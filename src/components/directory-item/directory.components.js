import "./directory.styles.scss";

const DirectoryItems = ({ categories }) => {
  const { id, title, imageUrl } = categories;
  return (
    <div className="directory-item-container" key={id}>
      {/* <img /> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body" key={id}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItems;
