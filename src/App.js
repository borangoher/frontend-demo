import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import PaymentForm from "./Components/PaymentForm.js";
import Info from "./Components/Info.js";
import LoginContext from "./Components/LoginContext.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [login, setLogin] = useState(false);
  const value = { login, setLogin };

  return (
    <div>
      <Navbar />
      <LoginContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/information" element={<Info />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
