import "./Register.css";

export const Register = () => {
  return (
    <div className="form">
      <h2>Register</h2>
      <form className="register-form">
        <input type="text" name="username" id="register-username" placeholder="username" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="repass" id="repeat-password" placeholder="repeat password" />
        <button type="submit">register</button>
        <p className="message">
          Already registered? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
};
