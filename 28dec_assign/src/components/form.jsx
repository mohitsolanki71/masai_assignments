import { useEffect, useState } from "react";
import "./form.css";

export const Form = ()=>{

    const [form , setForm] = useState({
        
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        marrital_status:"",
        profile_photo:"",
    });

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const handleChange = (e)=>{

        let {name, value} = e.target;

        setForm({
            ...form,
            [name] : value,
        });

        // console.log(e.target.value);
    };

    useEffect(()=>{
        getData();
    },[page]);

    const getData = ()=>{

        fetch(`http://localhost:3004/user?_page=${page}&_limit=5`).then(d=> d.json()).then(res=>{
            setData(res);
            // console.log("its res",res);
        });
    }

    const removeUser = (id) => {
        fetch(`http://localhost:3004/user/${id}`,{
               method: 'DELETE'
           }).then((d) => d.json())
           .then((res) => {
           getData();
           alert("User Delete Successfully!!")
        });
    }
       
    const sortLow = ()=>{
        fetch(`http://localhost:3004/user?_sort=salary&_order=asc`).then(d=> d.json()).then(res=>{
            setData(res);
            // console.log("its sort",res);
        });
    }
    const sortHigh = ()=>{
        fetch(`http://localhost:3004/user?_sort=salary&_order=desc`).then(d=> d.json()).then(res=>{
            setData(res);
            // console.log("its sort",res);
        });
    }

    const handleSubmit = (e)=>{

        e.preventDefault();
        // console.log(form);
        
        const payload = form;
        fetch("http://localhost:3004/user", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            },
        }).then(()=>{
            getData();
        })
    }

    return(

        <div id="container1">
            <div id="form">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} name="name" type="text" placeholder="Enter Name" /><br/>
                    <input onChange={handleChange} name="age" type="number" placeholder="Enter Age" /><br/>
                    <input onChange={handleChange} name="address" type="text" placeholder="Enter address" /><br/>
                    <select name="department" onChange={handleChange}>
                        <option value=""  hidden="hidden">Choose department</option>
                        <option value="mechanical">mechanical</option>
                        <option value="civil">civil</option>
                        <option value="computer science">computer science</option>
                        <option value="architecture">architecture</option>
                    </select><br/>
                    <input onChange={handleChange} name="salary" type="number" placeholder="Salary"/><br/>
                    <input onChange={handleChange} type="text" name="marrital_status" placeholder="Enter marrital status"></input><br/>
                    <input onChange={handleChange} name="profile_photo" type="text" placeholder="Enter Profile Photo URL" /><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div id="table">
                <button onClick={sortLow}>sort low</button>
                <button onClick={sortHigh}>sort high</button>
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Address</th>
                    <th>Marital Status</th>
                    <th>Salary</th>
                    <th>To Delete</th>
                    </tr>
                    {data.map((e, i) => (
                    <tr key={i}>
                        <td>{e.name}</td>
                        <td id="profile_pic">
                            <img src={e.profile_photo}></img>
                        </td>
                        <td>{e.age}</td>
                        <td>{e.department}</td>
                        <td>{e.address}</td>
                        <td>{e.marrital_status}</td>
                        <td>{e.salary}</td>
                        <td>
                            <button onClick={()=>{removeUser(e.id)}}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </table>

                {/* {pagination} */}
                <div id="button">
                    <button disabled={page ===1} onClick={()=>setPage(page-1)}>Previous</button>
                    <button onClick={()=>setPage(page+1)}>Next</button>
                </div>
            </div>
            
        </div>
    )
}