import { GroceryInput } from "./groceryInput"
import {useState} from "react";
import {GroceryItem} from "./groceryItem";
import {nanoid} from "nanoid";
import "./grocery.css"

export const Grocery = ()=>{

    const [list, setList] = useState([]);
    const getData = (data)=>{

        console.log("data in parent", data);

        const payload = {
            title:data,
            id:nanoid(7),
        }
        setList([...list, payload]);
    };

    const RemoveItem = (id)=>{

        // delete this id from main list 
        list.splice(list.findIndex(e=> e.id === id), 1);
        setList([...list]);
        // console.log(id +"is here");
    }

    return (
        <div className="grocery">
            <GroceryInput getData={getData}/>
            {list.map((e, i)=>(<GroceryItem key={e.id} {...e} RemoveItem={RemoveItem} />))}
        </div>
    )
};