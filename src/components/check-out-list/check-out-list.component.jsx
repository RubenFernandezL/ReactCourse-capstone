import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutListItemComponent from "./check-out-list-item/check-out-list-item.component";
import "./check-out-list.scss";

const CheckOutListComponent = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
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
      {cartItems.map((item) => (
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
