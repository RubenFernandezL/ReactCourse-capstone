import { CartAction } from "./cart.types";
const INITIAL_STATE = {
  isOpen: false,
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cart = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartAction.AddItem:
      return addItem(payload, state);
    case CartAction.SubstractItem:
      return substractItem(payload, state);
    case CartAction.RemoveItem:
      return deleteItem(payload, state);
    case CartAction.ToggleCart:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

const addItem = (item, state) => {
  console.log(state.items);
  if (isItemInCart(item, state.items))
    return {
      ...state,
      items: state.items.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + item.price,
    };
  return {
    ...state,
    items: [...state.items, { ...item, quantity: 1 }],
    totalItems: state.totalItems + 1,
    totalPrice: state.totalPrice + item.price,
  };
};

const substractItem = (item, state) => {
  const substractedItem = state.items.find(
    (cartItem) => cartItem.id === item.id
  );
  if (!substractedItem) return state;
  if (substractedItem.quantity === 1)
    return {
      ...state,
      items: state.items.filter(
        (cartItem) => cartItem.id !== substractedItem.id
      ),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - substractedItem.price,
    };
  return {
    ...state,
    items: state.items.map((cartItem) =>
      cartItem.id === substractedItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ),
    totalItems: state.totalItems - 1,
    totalPrice: state.totalPrice - substractedItem.price,
  };
};

const deleteItem = (item, state) => {
  const removedItem = state.items.find((cartItem) => cartItem.id === item.id);
  if (!removedItem) return state;
  return {
    ...state,
    items: state.items.filter((cartItem) => cartItem.id !== removedItem.id),
    totalItems: state.totalItems - removedItem.quantity,
    totalPrice: state.totalPrice - removedItem.price * removedItem.quantity,
  };
};

const isItemInCart = (item, cartItems) => {
  const cartIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  return cartIndex >= 0;
};
