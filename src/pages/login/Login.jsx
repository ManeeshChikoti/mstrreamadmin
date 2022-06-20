import React, { useContext, useState } from "react";
import { loginCall } from "../../context/authContext/Apicalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);

  };
  return (
    <div className="login">
      <form className="formforlogin">
        <h1>ADMIN LOGIN</h1>
        <input
          type="text"
          placeholder="abc@gmail.com"
          className="inputlogin"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="inputpassword"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginbutton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}
