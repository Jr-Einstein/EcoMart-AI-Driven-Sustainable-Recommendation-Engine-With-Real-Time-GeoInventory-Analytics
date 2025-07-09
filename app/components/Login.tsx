'use client'

import React from "react";
import "./Login.css";
import Link from "next/link";

function Login() {
  return (
    <div className="login">
      <Link href="/">
        <div className="login__logo">
          <span className="walmart-logo">Walmart</span>
        </div>
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" required />

          <h5>Password</h5>
          <input type="password" required />
          
          <Link href="/">
            <button className="login__signInButton" type="submit">
              Sign In
            </button>
          </Link>

          <p>
            By signing in you agree to the Terms and Conditions of Walmart.
            Please see our privacy notice and our cookies policy.
          </p>
          
          <button className="login__registerButton" type="button">
            Create your Walmart account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;