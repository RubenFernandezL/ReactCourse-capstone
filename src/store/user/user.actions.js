import { createAction } from "../../utils/reducer/reducer.utils";
import { UserAction } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(UserAction.SetCurrentUser, user);
