import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CategoriesAction } from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(CategoriesAction.FetchCategories);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CategoriesAction.FetchCategoriesSuccess, categories);

export const fetchCategoriesFailure = (error) =>
  createAction(CategoriesAction.FetchCategoriesFFetchCategoriesFailure, error);

export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
