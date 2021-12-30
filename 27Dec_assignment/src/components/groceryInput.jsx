import { useState } from "react";
import "./groceryInput.css";

export const GroceryInput = ({getData})=>{

    const [text, setText] = useState("");
    const handleChange = (e)=>{

        setText(e.target.value);
    }

    const handleClick = ()=>{

        getData(text);
    }
    return(

        <div className="inputPart">
            <input class="input" type="text" placeholder="Enter item name here" onChange={handleChange}></input>
            <button className="inputButton"onClick={handleClick}>Add Item</button>
        </div>
    )
}