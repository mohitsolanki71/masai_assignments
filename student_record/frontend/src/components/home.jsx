import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div id="homePage">
      <h2>Welcome to Home</h2>
      <Link to="/login">
        <button className="pageButton">Login</button>
      </Link>
    </div>
  );
};
