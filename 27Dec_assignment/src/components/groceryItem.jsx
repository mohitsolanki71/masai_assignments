import "./groceryItem.css";

export const GroceryItem = ({title, id, RemoveItem})=>{

    return(
            <div className="itemAdded">
                    <li>
                        <p>{title}</p>
                        <button className="removeButton" onClick={()=>RemoveItem(id)} >Remove</button>
                    </li>
            </div>
    
    )
}