import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Cook with Fun</h1>
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Recipes</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li>
              <Link to="/recipes/edit">Logout</Link>
            </li>
            <li>
              <Link to="/recipes/create">Add Recipe</Link>
            </li>
            <li>
              <Link to="/recipes/1234">Profile</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
