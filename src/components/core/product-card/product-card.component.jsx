import ButtonComponent from "../form-components/button/button.component";
import "./product-card.scss";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="Inverted">Add to card</ButtonComponent>
    </div>
  );
};
