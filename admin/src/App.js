import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Users from "./pages/users/users";
import Products from "./pages/products/products";
import AddProduct from "./pages/add-product/add_product"
import Order from "./pages/order/order"
import Delivery from "./pages/delivery/delivery"  
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminProfile from "./pages/adminProfile/adminProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Define the default route */}
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="adminProfile" element={<AdminProfile/>} />
          <Route path="orders" element={<Order/>} />
          <Route path="delivery" element={<Delivery/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
