import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="container">
      <Link id="navbar" to={"/"}>
        <img src="https://image.winudf.com/v2/image1/Y29tLmFwcGlnby50b2RvcHJvX2ljb25fMTU1NTI4Nzg4N18wODc/icon.png?w=&fakeurl=1"></img>
      </Link>
      <div>Todos List</div>
    </div>
  );
};
