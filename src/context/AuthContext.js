import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "62adc819f09830ec7a952fb0",
    username: "syarif",
    email: "syarif@gmail.com",
    password: "$2b$10$7iVLtWdhmcYFp9e.N2SDieKjpdL7La8i0sjqUAPMpm1AiP6PkhcAu",
    profilePicture: "person/2.jpeg",
    coverPicture: "",
    followers: ["62adc825f09830ec7a952fb2"],
    followings: [],
    isAdmin: false,
    city: "yogyakarta",
    from: "sintang",
    desc: "an ordinary man",
    status: "single",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
