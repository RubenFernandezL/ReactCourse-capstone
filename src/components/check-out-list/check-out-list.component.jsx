
import { useSelector } from "react-redux";
import { getCart } from "../../store/cart/cart.selector";
import CheckOutListItemComponent from "./check-out-list-item/check-out-list-item.component";
import "./check-out-list.scss";

const CheckOutListComponent = () => {
  const { items, totalPrice } = useSelector(getCart)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckOutListItemComponent
          key={item.id}
          item={item}
        ></CheckOutListItemComponent>
      ))}
      <span className="total">TOTAL: {totalPrice}€</span>
    </div>
  );
};

export default CheckOutListComponent;
