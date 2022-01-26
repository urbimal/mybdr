import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAccount from "../components/MyAccount";
import History from "../components/History";
import Payment from "../components/Payment";
import Exchange from "../components/Exchange";
import Signin from "../components/Signin";
import SignUp from "../components/SignUp";
import useToken from "../hooks/tokenHook";

const AppRouter = () => {
  const { token, setToken, unsetToken } = useToken();
  console.log(`[App]: Token is ${token}`);
  return token ? (
    <></>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Signin setToken={setToken} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/history' element={<History />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/exchange' element={<Exchange />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
