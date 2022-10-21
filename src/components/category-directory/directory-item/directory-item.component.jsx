import "./directory-item.scss";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div
      className="directory-item-container"
      key={id}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="background-image"></div>
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
