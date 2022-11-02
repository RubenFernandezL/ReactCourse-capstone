import { createSelector } from "reselect";

const getStateCart = (state) => state.cart;

export const getIsCartOpen = createSelector(
  [getStateCart],
  (cart) => cart.isOpen
);

export const getCartItems = createSelector(
  [getStateCart],
  (cart) => cart.items
);

export const getCartItemsCount = createSelector(
  [getStateCart],
  (cart) => cart.totalItems
);

export const getCartPrice = createSelector(
  [getStateCart],
  (cart) => cart.totalPrice
);
