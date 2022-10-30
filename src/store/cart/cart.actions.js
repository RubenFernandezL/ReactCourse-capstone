import { createAction } from "../../utils/reducer/reducer.utils";
import { CartAction } from "./cart.types";

export const addItem = (item) => createAction(CartAction.AddItem, item);
export const substractItem = (item) =>
  createAction(CartAction.SubstractItem, item);
export const deleteItem = (item) => createAction(CartAction.RemoveItem, item);
export const toggleCart = () => createAction(CartAction.ToggleCart, null);
