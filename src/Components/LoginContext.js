import { createContext, useReducer, useContext } from "react";

const LoginContext = createContext();
export const LoginActions = {
  LOGIN: "log in",
  LOGOUT: "log out",
};

function loginReducer(state, action) {
  switch (action.type) {
    case LoginActions.LOGIN: {
      return { isLoggedIn: true };
    }
    case LoginActions.LOGOUT: {
      return { isLoggedIn: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(loginReducer, { isLoggedIn: false });
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
