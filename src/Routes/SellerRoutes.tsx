import React from "react";
import { Route, Routes } from "react-router";
import DashBoard from "../seller/pages/SellerDashBoard/DashBoard";
import Product from "../customer/pages/Product/Product";

import Profile from "../seller/pages/Account/Profile";
import AddProduct from "../seller/pages/Product/AddProduct";
import Order from "../customer/pages/Account/Order";
import Transaction from "../seller/pages/Payment/Transaction";
import Products from "../seller/pages/Product/Products";
import SellerDashBoard from "../seller/pages/Payment/Payment";
import Orders from "../seller/pages/Orders/Orders";
import { Inventory } from "@mui/icons-material";
import Payment from "../seller/pages/Payment/Payment";

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/seller" element={<DashBoard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/transaction" element={<Transaction/>} />
      </Routes>
    </div>
  );
};

export default SellerRoutes;
