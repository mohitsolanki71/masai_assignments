import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div id="navbar">
      <div>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/Register">
          Register
        </Link>
      </div>
    </div>
  );
};
