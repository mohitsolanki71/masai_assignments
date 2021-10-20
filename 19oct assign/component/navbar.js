function navbar(){

    return `<h3><a href="search.html">Home</a></h3>

        <div id="options">
            
            <h3><a href="latest.html">Lastest Recipe</a></h3>
            <h3><a href="recipeOfDay.html">Recipe of Day</a></h3>
        </div>`
}

function input(){

    return `
                <input type="text" id="search" placeholder="search recipe">
            `

}

export {navbar, input};