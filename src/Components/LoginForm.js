import { useState, useEffect } from "react";
import axios from "axios";

export const onSubmit = (e, { emailAddress, passwordInput }) => {
  e.preventDefault();
  const loginUrl = "https://reqres.in/api/login";
  if (passwordInput < 1) {
    alert("Please enter a password.");
  }
  if (!validateEmail(emailAddress)) {
    alert("Please provide a valid email.");
  }
  axios
    .post(loginUrl, {
      email: emailAddress,
      password: passwordInput,
    })
    .then(console.log)
    .catch(console.error);
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const LoginForm = () => {
  const [emailAddress, setEmailAddress] = useState();
  const [passwordInput, setPasswordInput] = useState();

  return (
    <form>
      <input
        placeholder="Email"
        property="email"
        type="email"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
      ></input>

      <input
        placeholder="Password"
        property="password"
        type="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      ></input>

      <button onClick={(e) => onSubmit(e, { emailAddress, passwordInput })}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
