import { createContext } from "react";

const LoginContext = createContext({ login: false, setLogin: () => {} });

export default LoginContext;
