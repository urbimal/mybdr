import React, { Component, useState } from "react";
import axios from "axios";

async function register(email, password, fullName) {
  console.log(`[register]: Sending email ${JSON.stringify(email)}`);
  console.log(`[register]: Sending password ${JSON.stringify(password)}`);
  console.log(`[register]: Sending fullName ${JSON.stringify(fullName)}`);
  try {
    return await axios
      .post("http://localhost:3000/register", {
        email: email,
        password: password,
        fullName: fullName,
      })
      .then((response) => {
        console.log(`\n[register]: Response: ${response}`);
        if (response.data.message) return response.data.message;
        return "unknown";
      });
  } catch (err) {
    if (err.response && err.response.data)
      console.log(`\n[register]: Error ${err.response.data.err}`);
    return "error";
  }
}

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  const [responded, setResponded] = useState();

  async function registerOnSubmit(event) {
    event.preventDefault();
    const response = await register(email, password, fullName);
    setResponded(response);
  }

  if (responded) {
    return <h1>{responded}</h1>;
  }

  return (
    <form onSubmit={registerOnSubmit}>
      <h3>Register</h3>

      <div className='form-group'>
        <label>Email</label>
        <input
          type='email'
          className='form-control'
          placeholder=''
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label id='nume-intreg-label'>Nume intreg</label>
        <input
          type='text'
          className='form-control'
          placeholder='ex: Ionut Neacsu'
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label>Parola</label>
        <input
          type='password'
          className='form-control'
          placeholder=''
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type='submit' className='btn btn-dark btn-lg btn-block'>
        Register
      </button>
      <p className='forgot-password text-right'>
        Already registered <a href='#'>log in?</a>
      </p>
    </form>
  );
}
