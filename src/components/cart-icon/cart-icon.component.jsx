import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
