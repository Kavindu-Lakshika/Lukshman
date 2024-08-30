import "bootswatch/dist/lux/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Branch from "./pages/Branch";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import Customers from './pages/Customers';
import Booking from "./pages/Booking";
import Item from "./pages/Item";
import Buyers from "./pages/Buyers";
import Vender from "./pages/Vender";
import Brands from "./pages/Brands";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/item" element={<Item />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/buyer" element={<Buyers />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/brand" element={<Brands />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
