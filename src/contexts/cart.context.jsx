import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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
      return addItem(payload, state);
    case CartAction.SubstractItem:
      return substractItem(payload, state);
    case CartAction.RemoveItem:
      return removeItem(payload, state);
    case CartAction.ToggleCart:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const addItem = (item, state) => {
  if (isItemInCart(item, state.cartItems))
    return {
      ...state,
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + item.price,
    };
  return {
    ...state,
    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
    totalItems: state.totalItems + 1,
    totalPrice: state.totalPrice + item.price,
  };
};

const substractItem = (item, state) => {
  const substractedItem = state.cartItems.find(
    (cartItem) => cartItem.id === item.id
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
};

const removeItem = (item, state) => {
  const removedItem = state.cartItems.find(
    (cartItem) => cartItem.id === item.id
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
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, totalItems, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (item) => {
    dispatch(createAction(CartAction.AddItem, item));
  };

  const substractItemFromCart = (item) => {
    dispatch(createAction(CartAction.SubstractItem, item));
  };

  const removeItemFromCart = (item) => {
    dispatch(createAction(CartAction.RemoveItem, item));
  };

  const toggleCart = () => {
    dispatch(createAction(CartAction.ToggleCart));
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
