import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/userAuth";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleRegister, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <main>
        <h1>loading...</h1>
      </main>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleRegister(username, email, password).then((res) => {
      console.log(res);
      navigate("/");
    });
  }

  return (
    <main>
      <div className="form-container">
        <h1>Registration</h1>
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
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="enter your email"
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
            <button type="submit">Register</button>
          </div>
        </form>
        <p>
          Already have an account?
          <Link className="toggleAuthform" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterForm;
