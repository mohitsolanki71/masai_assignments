import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./navbar.css";
export const Navbar = () => {
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();
  let check = JSON.parse(localStorage.getItem("userToken"));
  useEffect(() => {
    getToken();
    console.log("its navbar");
  }, []);

  const getToken = () => {
    let user_token = JSON.parse(localStorage.getItem("userToken"));
    if (user_token) {
      handleToken(user_token);
      navigate("/student");
      console.log("User:", user_token);
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <div id="navbar">
      <div>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
      <div>
        {check ? (
          <button className="buttonlink" onClick={logout}>
            LogOut
          </button>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}

        <Link className="link" to="/Register">
          Register
        </Link>
      </div>
    </div>
  );
};
