async function getData(url){

    try{
        let res = await fetch(url);

        let data  = await res.json();

        return data;
    } catch(e){

        console.log(e);
    }
}

function append(recipes, container){

    recipes.forEach(({strMeal, strInstructions , strMealThumb})=>{

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = strMealThumb;

        let p2 = document.createElement("h2");
        p2.innerText =strMeal;

        let p1 = document.createElement("p");
        p1.innerText =strInstructions;

        div.append(image ,p2 ,p1);

        container.append(div);

    });
}

async function show(){

    try{
        container.innerHTML = null;

        let query = document.getElementById("search").value;

        if(query.length == 0){
            container.style.display ="none";
        }

        let res = await getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

        console.log(res.meals);

        append(res.meals, container);
    } catch(e){
        console.log(e);
    }
}
let timerId;
function debounce(){

    if( timerId){
        clearTimeout(timerId);
    }

    timerId = setTimeout(function (){

        show();
    }, 1000)
}
export { debounce };
export {getData, append};

