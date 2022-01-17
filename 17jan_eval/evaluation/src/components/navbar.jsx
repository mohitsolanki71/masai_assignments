import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <div id="navContainer">
      <div id="navImage">
        <img src="https://www.clipartmax.com/png/middle/32-328856_job-search-icon-job.png" />
      </div>
      <div id="navButtons">
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};
