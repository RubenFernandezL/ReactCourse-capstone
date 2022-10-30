import "./cart-icon.scss";
import { CartIconContainer, ShoppingIcon, CartCount } from "./cart-icon.style";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cart.selector";
import { toggleCart } from "../../store/cart/cart.actions";

const CartIcon = () => {
  const { totalItems } = useSelector(getCart);
  const dispatch = useDispatch()
  const toggleCartOpen = () => dispatch(toggleCart())

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <CartCount>{totalItems}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
