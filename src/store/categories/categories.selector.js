import { createSelector } from "reselect";

const getStateCategories = (state) => state.categories;

export const getCategories = createSelector(
  [
    createSelector(
      [getStateCategories],
      (categoriesSelector) => categoriesSelector
    ),
  ],
  (categories) => categories.categories
);

export const getCategoriesStatus = createSelector(
  [
    createSelector(
      [getStateCategories],
      (categoriesStatusSelector) => categoriesStatusSelector
    ),
  ],
  (categories) => categories.isLoading
);
