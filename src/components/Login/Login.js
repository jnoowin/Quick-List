import React from "react";
import "./Login.css";
import { signIn } from "../../firebase/auth";
import { Link } from "react-router-dom";
import GoogleIcon from "./google-512.png";

export default function Login() {
  return (
    <div className="loginPage">
      <div className="loginCard">
        <h3>
          <b>Login:</b>
        </h3>
        <button onClick={() => signIn()}>
          <img src={GoogleIcon} width="25" alt="google icon"></img>
          Google
        </button>
        <p>
          or try it without logging in{" "}
          <Link to="/app" onClick={() => localStorage.setItem("guest", "true")}>
            here
          </Link>
        </p>
      </div>
    </div>
  );
}
