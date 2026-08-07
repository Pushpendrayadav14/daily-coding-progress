import React from "react";
import "../style/form.scss";

const LoginForm = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            name="username"
            placeholder="enter your usernmae"
          />
          <input
            type="password"
            name="password"
            placeholder="enter your password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
