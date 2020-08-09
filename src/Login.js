import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    //register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created a user and logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/07/12/amazon.jpg?itok=C42UtRbn"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By singning-in you agree to Amazon's Conditions of Privacy Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
