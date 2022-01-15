import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo , editTodo} from "../features/action";
import "./todo.css";


export const Todo = ()=>{

    const [text, setText] = useState("");
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();

    async function req(){

        const data = await fetch("http://localhost:3004/todos").then((d)=>d.json());

        dispatch(getTodo(data));
    }

    useEffect(()=>{

        req();
    },[]);

    const handleChange = (e)=>{

        setText(e.target.value);
    };

    const handleClick= ()=>{

        fetch("http://localhost:3004/todos",{
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({status:false,title:text}),
        }).then((d)=>d.json()).then(res=>{

            // success
            dispatch(addTodo(res));
        })
    }

    const handleToggle=(id, status)=>{

        let newStatus;

        if(status){
            newStatus = false;
        }else{
            newStatus = true;
        }

        fetch(`http://localhost:3004/todos/${id}`,{
            method:"PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({status:newStatus}),
        }).then((d)=>d.json()).then(res=>{

            // success
            dispatch(editTodo(res));
            req();
        }).catch((err)=>{
            console.log(err);
        })
    }

    const deleteElement = (id)=>{

        fetch(`http://localhost:3004/todos/${id}`,{
            method:"DELETE",
        });
        req();
    }

    return(
        <div>
            <input id="input" value={text} type="text" placeholder="Enter todo here" onChange={handleChange}></input>

            <button id="inputButton" onClick={handleClick}>Add Todo</button>

            <div id="output">
                {todos.map((e, i)=>(
                    <div key={i} className="element">
                        <div className="element1"><b> {e.title} </b> -<p>{e.status? "Done" : "Not Done"}</p>  </div>
                        <button onClick={()=>{handleToggle(e.id, e.status)}}>Toogle</button>
                        <button onClick={()=>{deleteElement(e.id)}}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}