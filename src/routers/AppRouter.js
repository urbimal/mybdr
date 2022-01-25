import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import MyAccount from "../components/MyAccount";
import History from "../components/History";
import Payment from "../components/Payment";
import Exchange from "../components/Exchange";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/myaccount' element={<MyAccount />} />
      <Route path='/history' element={<History />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/exchange' element={<Exchange />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
