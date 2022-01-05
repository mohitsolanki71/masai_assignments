import { Link } from "react-router-dom"
import "./navbar.css";

export const Navbar = ()=>{

    return (
        <div id="navbar">
            <img src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE="></img>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/products">Product</Link>
        </div>
    )
}