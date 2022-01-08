import { AuthContext } from "../context/auth.context"
import {useContext} from "react";

export const Navbar = ()=>{

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const handleLogin = ()=>{

        setIsAuth(false);
    }
    return (
        <div>
            
            <button onClick={handleLogin}>{isAuth === false ? 'Login' : "LogOut"}</button>
        </div>
    )
}