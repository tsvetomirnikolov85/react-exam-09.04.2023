import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import "./Register.css";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      username: "",
      email: "",
      town: "",
      password: "",
      repass: "",
    },
    onRegisterSubmit
  );

  return (
    <div className="form">
      <h2>Register</h2>
      <form onSubmit={onSubmit} className="register-form" method="POST">
        <input type="text" onChange={changeHandler} name="username" id="register-username" placeholder="username" value={values.username} />
        <input type="email" onChange={changeHandler} name="email" id="register-email" placeholder="email" value={values.email} />
        <input type="text" onChange={changeHandler} name="town" id="register-email" placeholder="town" value={values.town} />
        <input type="password" onChange={changeHandler} name="password" id="register-password" placeholder="password" value={values.password} />
        <input type="password" onChange={changeHandler} name="repass" id="repeat-password" placeholder="repeat password" value={values.repass} />
        <button type="submit">register</button>
        <p className="message">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
