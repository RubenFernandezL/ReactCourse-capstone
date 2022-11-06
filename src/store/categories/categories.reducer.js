import { CategoriesAction } from "./categories.types";

const INITIAL_STATE = { categories: [], isLoading: false, error: null };

export const categories = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CategoriesAction.FetchCategories:
      return { ...state, isLoading: true };
    case CategoriesAction.FetchCategoriesSuccess:
      return { ...state, categories: payload, isLoading: false };
    case CategoriesAction.FetchCategoriesFailure:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
