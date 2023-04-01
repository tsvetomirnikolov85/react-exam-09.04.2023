import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onLoginSubmitHandler(e) {
    e.preventDefault();
  }

  function onUsernameChange(e) {
    setUsername(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={onLoginSubmitHandler} className="login-form">
        <input onChange={onUsernameChange} type="text" name="username" id="login-username" placeholder="username" value={username} />
        <input onChange={onPasswordChange} type="password" name="password" id="login-password" placeholder="password" value={password} />
        <button type="submit">login</button>
        <p className="message">
          Not registered? <a href="#">Create an account</a>
        </p>
      </form>
    </div>
  );
};
