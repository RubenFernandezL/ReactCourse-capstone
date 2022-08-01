import "./category-item.scss";

const CategoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div
      className="category-container"
      key={id}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="background-image"></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
