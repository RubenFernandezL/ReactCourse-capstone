import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0,
  setTotalItems: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalItems(
      cartItems.reduce((partialSum, item) => partialSum + item.quantity, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (partialSum, item) => partialSum + item.quantity * item.price,
        0
      )
    );
  }, [cartItems]);

  const addItemToCart = (item) => {
    const cartIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (cartIndex >= 0)
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    else setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const substractItemFromCart = (item, isDelete = false) => {
    const cartIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (cartIndex >= 0) {
      setCartItems(
        cartItems.reduce((newCart, cartItem) => {
          if (cartItem.id === item.id) {
            if (isDelete || cartItem.quantity - 1 === 0) return newCart;
            return [
              ...newCart,
              {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              },
            ];
          } else return [...newCart, cartItem];
        }, [])
      );
    }
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    substractItemFromCart,
    cartItems,
    totalItems,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
