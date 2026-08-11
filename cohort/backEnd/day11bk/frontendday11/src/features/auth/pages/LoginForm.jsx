import React, { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/userAuth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate();

  if(loading) {
    return (
      <main>
        <h1>loading...</h1>
      </main>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin(username, password).then((res) => {
      console.log(res);
      navigate("/");
    });
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="enter your usernmae"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="enter your password"
          />
          <div className="btnbox">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          Dont't have account?
          <Link className="toggleAuthform" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginForm;
