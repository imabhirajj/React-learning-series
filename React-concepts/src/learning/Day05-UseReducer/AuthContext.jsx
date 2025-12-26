import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  user: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login() {
    dispatch({ type: "LOGIN", payload: { name: "Abhiraj" } });
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};