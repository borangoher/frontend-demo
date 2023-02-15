import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PaymentForm from "./components/payment-form/PaymentForm";
import Login from "./components/login/Login";
import Info from "./components/Info";
import { LoginProvider } from "./components/LoginContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div>
      <Navbar />
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/information" element={<Info />} />
        </Routes>
      </LoginProvider>
    </div>
  );
}

export default App;
