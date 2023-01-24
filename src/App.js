import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import PaymentForm from "./Components/PaymentForm.js";
import Info from "./Components/Info.js";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/payment" element={<PaymentForm/>} />
        <Route path="/information" element={<Info/>} />
      </Routes>
    </div>
  );
}

export default App;
