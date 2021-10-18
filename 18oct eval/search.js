let container = document.getElementById("news");

        async function searchNews(){
            let query= document.getElementById("search").value;

            let res = await fetch(`http://newsapi.org/v2/everything?q=${query}&from=2021-10-18&sortBy=popularity&apiKey=bd7dcfad4f02421fa599dcfda5dc1fc2`);

            let data = await res.json();

            console.log(data);

            appendSearch(data.articles);

        }

        function appendSearch(articles){

            container.innerHTML = null;

            articles.forEach((article)=>{

                let div = document.createElement("div");

                let title = document.createElement("p");
                title.innerText = article.title;
                title.classList.add("bold");

                let date = document.createElement("p");
                date.innerText = article.publishedAt;

                let description = document.createElement("p");
                description.innerText = article.description;
                description.classList.add("grey");

                let image = document.createElement("img");
                image.src = article.urlToImage;


                div.append(title,description, image);
                container.append(div);
            })
        }