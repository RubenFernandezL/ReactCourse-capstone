import "./cart-icon.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShoppingIcon, CartCount } from "./cart-icon.style";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <CartCount>{totalItems}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
