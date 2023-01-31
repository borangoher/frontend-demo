import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import PaymentForm from "./components/payment-form/PaymentForm.js";
import Info from "./components/Info.js";
import { LoginProvider } from "./components/LoginContext.js";
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
