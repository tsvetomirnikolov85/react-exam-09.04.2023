import { useContext, useState } from "react";
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
  const [userNameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [townError, setTownError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [rePassError, setRePassError] = useState(false);

  function checkUsername() {
    if (values.username.length < 4) {
      setUsernameError(true)
    } else {
      setUsernameError(false)
    }
  }

  function checkEmail() {
    if (values.email.length < 4) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }

  function checkTown() {
    if (values.town.length < 4) {
      setTownError(true)
    } else {
      setTownError(false)
    }
  }

  function checkPassword() {
    if (values.password.length < 4) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
  }

  function checkRePass() {
    if (values.password.length !== values.repass.length) {
      setRePassError(true)
    } else {
      setRePassError(false)
    }
  }
  return (
    <div className="form">
      <h2>Register</h2>
      <form onSubmit={onSubmit} className="register-form" method="POST">
        {
          userNameError && <p >username must be at least 4 characters long</p>
        }
        <input type="text" onChange={changeHandler} onBlur={checkUsername} name="username" id="register-username" placeholder="username" value={values.username} />
        {
          emailError && <p>email must includes "@"</p>
        }
        <input type="email" onChange={changeHandler} onBlur={checkEmail} name="email" id="register-email" placeholder="email" value={values.email} />
        {
          townError && <p >town must be at least 4 characters long</p>
        }
        <input type="text" onChange={changeHandler} onBlur={checkTown} name="town" id="register-email" placeholder="town" value={values.town} />
        {
          passwordError && <p>password must be at least 4 characters long</p>
        }
        <input type="password" onChange={changeHandler} onBlur={checkPassword} name="password" id="register-password" placeholder="password" value={values.password} />
        {
          rePassError && <p>repeat password length is differend than password</p>
        }
        <input type="password" onChange={changeHandler} onBlur={checkRePass} name="repass" id="repeat-password" placeholder="repeat password" value={values.repass} />
        <button type="submit">register</button>
        <p className="message">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
