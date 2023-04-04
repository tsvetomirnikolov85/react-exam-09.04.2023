import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");

  function onLoginSubmitHandler(e) {
    e.preventDefault();
    const baseUrl = `http://localhost:8080/users/register`;
    const user = fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password, repass }),
    })
      .then((responce) => responce.json())
      .then((data) => console.log(data))
      .catch(console.error());
    console.log(user);
  }

  function onUsernameChange(e) {
    setUsername(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onRepeatPasswordChange(e) {
    setRepass(e.target.value);
  }

  return (
    <div className="form">
      <h2>Register</h2>
      <form onSubmit={onLoginSubmitHandler} className="register-form" method="POST">
        <input type="text" onChange={onUsernameChange} name="username" id="register-username" placeholder="username" value={username} />
        <input type="password" onChange={onPasswordChange} name="password" id="register-password" placeholder="password" value={password} />
        <input type="password" onChange={onRepeatPasswordChange} name="repass" id="repeat-password" placeholder="repeat password" value={repass} />
        <button type="submit">register</button>
        <p className="message">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
