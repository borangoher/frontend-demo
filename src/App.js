import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Login from "./components/login/Login.js";
import PaymentForm from "./components/PaymentForm.js";
import Info from "./components/Info.js";
import LoginContext from "./components/LoginContext.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { isLoggedIn, setIsLoggedIn };

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
