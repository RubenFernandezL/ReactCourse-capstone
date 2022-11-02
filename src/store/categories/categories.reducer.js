import { CategoriesAction } from "./categories.types";

const INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CategoriesAction.SetCategories:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
