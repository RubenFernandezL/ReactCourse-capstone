import { combineReducers } from "redux";
import { cart } from "./cart/cart.reducer";
import { categories } from "./categories/categories.reducer";
import { user } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user,
  categories,
  cart,
});
