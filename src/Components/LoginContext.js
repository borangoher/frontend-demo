import { createContext } from "react";

const LoginContext = createContext({ isLoggedIn: false, setLogin: () => {} });

export default LoginContext;
