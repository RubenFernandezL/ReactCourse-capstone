import { useReducer } from "react";
import { createContext } from "react";

export const CartAction = {
  ToggleCart: "ToggleCart",
  AddItem: "AddItem",
  SubstractItem: "SubstractItem",
  RemoveItem: "RemoveItem",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const CartContext = createContext(INITIAL_STATE);

const isItemInCart = (item, cartItems) => {
  const cartIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  return cartIndex >= 0;
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartAction.AddItem:
      if (isItemInCart(payload, state.cartItems))
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + payload.price,
        };
      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + payload.price,
      };
    case CartAction.SubstractItem:
      const substractedItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );
      if (!substractedItem) return state;
      if (substractedItem.quantity === 1)
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.id !== substractedItem.id
          ),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - substractedItem.price,
        };
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === substractedItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - substractedItem.price,
      };
    case CartAction.RemoveItem:
      const removedItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );
      if (!removedItem) return state;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== removedItem.id
        ),
        totalItems: state.totalItems - removedItem.quantity,
        totalPrice: state.totalPrice - removedItem.price * removedItem.quantity,
      };
    case CartAction.ToggleCart:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, totalItems, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (item) => {
    dispatch({ type: CartAction.AddItem, payload: item });
  };

  const substractItemFromCart = (item) => {
    dispatch({ type: CartAction.SubstractItem, payload: item });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: CartAction.RemoveItem, payload: item });
  };

  const toggleCart = () => {
    dispatch({ type: CartAction.ToggleCart });
  };

  const value = {
    isCartOpen,
    toggleCart,
    addItemToCart,
    substractItemFromCart,
    removeItemFromCart,
    cartItems,
    totalItems,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
