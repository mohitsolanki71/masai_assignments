import { AuthContext } from "../context/auth.context"
import {useContext} from "react";

export const Status = ()=>{

    const {isAuth, token} = useContext(AuthContext);
    return(
        <div>
            Status is: {isAuth}<br></br>
            Token is : {token}
        </div>
    )
}