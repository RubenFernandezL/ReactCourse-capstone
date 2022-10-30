import "./check-out-list-item.scss";
import { useDispatch } from "react-redux";
import { addItem, deleteItem, substractItem } from "../../../store/cart/cart.actions";

const CheckOutListItemComponent = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;
  const dispatch = useDispatch()

  const addProductToCart = () => dispatch(addItem(item));
  const substractProductFromCart = () => dispatch(substractItem(item));
  const deleteProductFromCart = () => dispatch(deleteItem(item));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={substractProductFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addProductToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteProductFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutListItemComponent;
