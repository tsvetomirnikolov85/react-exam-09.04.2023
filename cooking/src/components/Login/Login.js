import { useContext } from "react";
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

  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="login-form">
        <input onChange={changeHandler} type="text" name="username" id="login-username" placeholder="username" value={values.username} />
        <input onChange={changeHandler} type="password" name="password" id="login-password" placeholder="password" value={values.password} />
        <button type="submit">login</button>
        <p className="message">
          Not registered? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
};
