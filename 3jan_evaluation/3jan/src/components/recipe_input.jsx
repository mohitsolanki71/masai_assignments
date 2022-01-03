import { useState, useEffect } from "react";
import "./recipe_input.css";

export const Recipe= ()=>{

    const [form , setForm] = useState({
        
        title:"",
        ingredients:"",
        time:"",
        image:"",
        instructions:"",
    });

    const [recipe, setRecipe] = useState([]);

    useEffect(()=>{
        getTodo();
    });

    const getTodo = ()=>{

        fetch(`http://localhost:3004/recipe?_page=1&_limit=4`).then(d=> d.json()).then(res=>{
            setRecipe(res);
        });

    }
     const handleChange=(e)=>{
        
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value,
        });
     }

     const handleSubmit = (e) => {

        e.preventDefault();
        console.log(form);

        const payload = form;
        fetch("http://localhost:3004/recipe", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            },
        });
    }
    return(
        <div id="container" >
            <div id="input_div">
                <form onSubmit={handleSubmit}>
                    <input name="title" type="text" placeholder="title" onChange={handleChange}></input>
                    <input name="ingredients" type="text" placeholder="ingredients" onChange={handleChange}></input>
                    <input name="time" type="text" placeholder="time to cook" onChange={handleChange}></input>
                    <input name="image" type="text" placeholder="image" onChange={handleChange}></input>
                    <input name="instructions" type="text" placeholder="instructions" onChange={handleChange}></input>

                    <input type="submit"></input>
                </form>
            </div>
            
            <div id="output_div">
                <h3>output div</h3>
                {recipe.map((e, i)=>(
                <li id="textOutpt" key={i}> {e.title}</li>
                ))}
            </div>
        </div>
    )
}