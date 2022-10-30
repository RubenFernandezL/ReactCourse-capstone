import ButtonComponent from "../core/form-components/button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyCartMessage,
} from "./cart-dropdown.styles";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cart.selector";
import { toggleCart } from "../../store/cart/cart.actions";

const CartDropDownComponent = () => {
  const { items } = useSelector(getCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckOut = () => {
    dispatch(toggleCart());
    navigate("/check-out");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {items?.length > 0 ? (
          items.map((item) => (
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
