import ButtonComponent from "../core/form-components/button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyCartMessage,
} from "./cart-dropdown.styles";

const CartDropDownComponent = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOut = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/check-out");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems?.length > 0 ? (
          cartItems.map((item) => (
            <CartItemComponent
              key={item.id}
              cartItem={item}
            ></CartItemComponent>
          ))
        ) : (
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        )}
      </CartItems>
      <ButtonComponent onClick={goToCheckOut}>CHECKOUT</ButtonComponent>
    </CartDropdownContainer>
  );
};

export default CartDropDownComponent;
