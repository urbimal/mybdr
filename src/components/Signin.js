import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useUser from "../hooks/userHook";

async function login(email, password, setError) {
  let resp = null;

  await axios
    .post("http://localhost:3000/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
      resp = response.data;
      if (!response.data.token) throw new Error("Nu ati confirmat mailul.");
    })
    .catch((err) => {
      setError(err);
    });

  console.log(`[LOGIN] Returning token ${resp?.token}`);
  return resp;
}

export default function Signin({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { user, setUser, unsetUser } = useUser();

  const history = useNavigate();

  const loginOnSubmit = async (event) => {
    event.preventDefault();
    const resp = await login(email, password, setError);
    console.log(`[LOGIN] Got token : ${resp.token}`);
    if (resp) {
      setToken(resp.token);
      setUser(JSON.stringify(resp.user));

      if (resp.token) history.push("/");
    }
  };

  return (
    <form onSubmit={loginOnSubmit}>
      <h3>Log in</h3>

      <div className='form-group'>
        <label>Email</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label>Parola</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type='submit' className='btn btn-dark btn-lg btn-block'>
        Log in
      </button>

      {error && <a>Opps: {error?.response?.data?.err}</a>}
    </form>
  );
}
