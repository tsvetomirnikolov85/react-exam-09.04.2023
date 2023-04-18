import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import "./Login.css";

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      username: "",
      password: "",
    },
    onLoginSubmit
  );
  const [userNameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function checkUsername() {
    if (values.username.length < 4) {
      setUsernameError(true)
    } else {
      setUsernameError(false)
    }
  }

  function checkPassword() {
    if (values.password.length < 4) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
  }
  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={onSubmit} method="POST" className="login-form">
        {
          userNameError && <p className="username-error">username must be at least 4 characters long</p>
        }
        <input onChange={changeHandler} onBlur={checkUsername} type="text" name="username" id="login-username" placeholder="username" value={values.username} />
        {
          passwordError && <p className="password-error">password must be at least 4 characters long</p>
        }
        <input onChange={changeHandler} onBlur={checkPassword} type="password" name="password" id="login-password" placeholder="password" value={values.password} />
        <button type="submit">login</button>
        <p className="message">
          Not registered? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
};
