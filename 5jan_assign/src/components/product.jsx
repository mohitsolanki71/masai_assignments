import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./product.css";

export const Product = ()=>{

    const [data, setData] = useState([]);

    useEffect(()=>{

        getData();
    },[]);

    const getData = ()=>{

        fetch("http://localhost:3004/products").then(d=> d.json()).then(res=>{
            setData(res);
            console.log(res);
        })
    }

    return(
        <div id="container">
            {data.map((e, i)=>(
                <Link id="link" to={`/products/${e.id}`}>
                    <div className="product" key={i}>
                        <img src={e.image} alt="not available"></img>
                        <p>{e.title}</p>
                        <p><b>Price:</b> {e.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}