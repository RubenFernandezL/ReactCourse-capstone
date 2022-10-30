import { CartAction } from "./cart.types";
const INITIAL_STATE = {
  cart: {
    isOpen: false,
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
};

export const cartReducer = (state = INITIAL_STATE, action) => {
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
        cart: {
          ...state.cart,
          isOpen: !state.cart.isOpen,
        },
      };
    default:
      return state;
  }
};

const addItem = (item, state) => {
  console.log(state.cart.items);
  if (isItemInCart(item, state.cart.items))
    return {
      ...state,
      cart: {
        ...state.cart,
        items: state.cart.items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
        totalItems: state.cart.totalItems + 1,
        totalPrice: state.cart.totalPrice + item.price,
      },
    };
  return {
    ...state,
    cart: {
      ...state.cart,
      items: [...state.cart.items, { ...item, quantity: 1 }],
      totalItems: state.cart.totalItems + 1,
      totalPrice: state.cart.totalPrice + item.price,
    },
  };
};

const substractItem = (item, state) => {
  const substractedItem = state.cart.items.find(
    (cartItem) => cartItem.id === item.id
  );
  if (!substractedItem) return state;
  if (substractedItem.quantity === 1)
    return {
      ...state,
      cart: {
        ...state.cart,
        items: state.cart.items.filter(
          (cartItem) => cartItem.id !== substractedItem.id
        ),
        totalItems: state.cart.totalItems - 1,
        totalPrice: state.cart.totalPrice - substractedItem.price,
      },
    };
  return {
    ...state,
    cart: {
      ...state.cart,
      items: state.cart.items.map((cartItem) =>
        cartItem.id === substractedItem.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
      totalItems: state.cart.totalItems - 1,
      totalPrice: state.cart.totalPrice - substractedItem.price,
    },
  };
};

const deleteItem = (item, state) => {
  const removedItem = state.cart.items.find(
    (cartItem) => cartItem.id === item.id
  );
  if (!removedItem) return state;
  return {
    ...state,
    cart: {
      ...state.cart,
      items: state.cart.items.filter(
        (cartItem) => cartItem.id !== removedItem.id
      ),
      totalItems: state.cart.totalItems - removedItem.quantity,
      totalPrice:
        state.cart.totalPrice - removedItem.price * removedItem.quantity,
    },
  };
};

const isItemInCart = (item, cartItems) => {
  const cartIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  return cartIndex >= 0;
};
