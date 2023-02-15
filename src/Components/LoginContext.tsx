import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  isLoggedIn: false
}

type AppState = typeof initialState

const LoginContext = createContext<{
  state: AppState,
  dispatch: React.Dispatch<LoginAction>
}>({state: initialState, dispatch: () => {}});

export enum LoginActionState {
  LOGIN,
  LOGOUT,
}

type LoginAction = {type: LoginActionState};


interface LoginContextProvider  {
  children: React.ReactNode
}

function loginReducer(state: AppState, action: LoginAction) {
  switch (action.type) {
    case LoginActionState.LOGIN: {
      return { isLoggedIn: true };
    }
    case LoginActionState.LOGOUT: {
      return { isLoggedIn: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function LoginProvider({children}: LoginContextProvider ) {
  const [state, dispatch] = useReducer(loginReducer, initialState);
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

export { LoginProvider, useLogin, LoginAction };
