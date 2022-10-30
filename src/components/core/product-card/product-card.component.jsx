import ButtonComponent, {
  BUTTON_TYPE,
} from "../form-components/button/button.component";
import "./product-card.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cart/cart.actions";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const { name, price, imageUrl } = product;
  const addProductToCart = () => {
    dispatch(addItem(product))
  };

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
