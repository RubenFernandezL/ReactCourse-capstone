import ButtonComponent from "../core/form-components/button/button.component";
import "./cart-dropdown.scss";
import CartItemComponent from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropDownComponent = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOut = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/check-out");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} cartItem={item}></CartItemComponent>
        ))}
      </div>
      <ButtonComponent onClick={goToCheckOut}>CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CartDropDownComponent;
