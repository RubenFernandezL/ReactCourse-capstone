import ButtonComponent, {
  BUTTON_TYPE,
} from "../form-components/button/button.component";
import "./product-card.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
export const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE.Inverted}
      >
        Add to card
      </ButtonComponent>
    </div>
  );
};
