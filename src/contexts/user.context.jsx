import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

const INITIAL_STATE = {
  currentUser: null,
};

export const UserAction = {
  SetCurrentUser: "SetCurrentUser",
};

export const UserContext = createContext(INITIAL_STATE);

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserAction.SetCurrentUser:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    dispatch({ type: UserAction.SetCurrentUser, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
