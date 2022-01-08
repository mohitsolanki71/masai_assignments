import { useState } from "react";
import { AuthContext } from "../context/auth.context"
import {useContext} from "react";
import "./form.css";

export const Form = ()=>{

    const {isAuth, setIsAuth, setToken, token} = useContext(AuthContext);

    const [form, setForm] = useState([]);


    const handleChange = (e)=>{
        
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]:value,
        })
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            fetch("https://reqres.in/api/login", {
              method: "POST",
              body: JSON.stringify(form),
              headers: { "content-type": "application/json" },
            })
              .then((d) => 
                d.json()
              )
              .then((res) => {
                console.log("is res",res);
                setToken(res.token);
              })
              setIsAuth(true);
          };

    return(
        <div>
            {isAuth === true ? (<div> Welcome Token is : {token} </div>) : (<div id="formBox">
            <form onSubmit={handleSubmit}>
                <input name="email" type="text" placeholder="Enter Name" onChange={handleChange}></input><br></br>
                <input name="password" type="password" placeholder="Enter password" onChange={handleChange}></input><br></br>

                <input type="submit"></input>
            </form>
        </div>)}
        </div>
    )
}