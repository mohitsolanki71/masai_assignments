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
        getRecipe();
    },[]);

    const getRecipe = ()=>{

        fetch(`http://localhost:3004/recipe`).then(d=> d.json()).then(res=>{
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
        }).then(()=>{
            getRecipe();
        });
    }
    const sendData = ()=>{

    }

    return(
        <div >
            <div id="container1" >
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
                    <h3>Recipe Available</h3>
                    {recipe.map((e, i)=>(
                    <li onClick={sendData} id="textOutpt" key={i}> {e.title}</li>
                    ))}
                </div>
            </div>
            <div id="container2">
                <h2>its container 2</h2>
                <div>

                </div>
            </div>
        </div>
    )
}