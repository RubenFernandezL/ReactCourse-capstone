import { UserAction } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserAction.SetCurrentUser:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};