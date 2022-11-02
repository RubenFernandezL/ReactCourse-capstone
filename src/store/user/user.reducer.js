import { UserAction } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const user = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserAction.SetCurrentUser:
      return payload;
    default:
      return state;
  }
};
