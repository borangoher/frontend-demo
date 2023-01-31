import { createContext, useReducer, useContext } from "react";

const LoginContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case "log in": {
      return { isLoggedIn: true };
    }
    case "log out": {
      return { isLoggedIn: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, { isLoggedIn: false });
  const value = { state, dispatch };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
}

export { LoginProvider, useLogin };
