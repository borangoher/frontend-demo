import { Route, Routes } from "react-router-dom";
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
  return (
    <div>
      <Navbar />
      <Routes>
        <LoginContext.Provider>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/information" element={<Info />} />
        </LoginContext.Provider>
      </Routes>
    </div>
  );
}

export default App;
