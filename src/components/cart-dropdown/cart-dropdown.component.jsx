import ButtonComponent from "../core/form-components/button/button.component";
import "./cart-dropdown.scss";

const CartDropDownComponent = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CartDropDownComponent;
