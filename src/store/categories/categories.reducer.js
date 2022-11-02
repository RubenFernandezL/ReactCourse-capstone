import { CategoriesAction } from "./categories.types";

const INITIAL_STATE = [];

export const categories = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CategoriesAction.SetCategories:
      return payload;
    default:
      return state;
  }
};
