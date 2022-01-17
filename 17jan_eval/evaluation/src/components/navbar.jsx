import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  const jobs = () => {
    navigate("/getjob");
  };

  return (
    <div id="navContainer">
      <div id="navImage">
        <Link to={"/"}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxFgkpc2Dmd4r2wdmjlZkqTbMS772Um8ghA&usqp=CAU" />
        </Link>
      </div>
      <div id="navButtons">
        <button onClick={jobs}>Jobs</button>
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};
