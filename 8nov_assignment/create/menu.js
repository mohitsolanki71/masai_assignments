
let container = document.getElementById("container");

async function dishes(){
    
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b");

    let data = await res.json();

    append(data.meals);
    console.log(data.meals);
}

function append(dishs){

    dishs.forEach((dish)=>{

        let div = document.createElement("div");

        let name = document.createElement("p");

        name.innerText = dish.strMeal;

        let img = document.createElement("img");

        img.src = dish.strMealThumb;

        let berif = document.createElement("p");
        berif.innerText = dish.strTags;
        
        let button = document.createElement("button");
        button.innerText = "Add to Cart"

        div.append(img, name, berif, button);

        container.append(div);
    })
}
dishes();