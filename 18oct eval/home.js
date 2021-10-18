let container = document.getElementById("article");
        

        async function topNews(){

            let res = await fetch("http://newsapi.org/v2/top-headlines?country=in&apiKey=bd7dcfad4f02421fa599dcfda5dc1fc2");

            let data = await res.json();

            console.log(data);

            appendNews(data.articles);
        }

        function appendNews(articles){

            articles.forEach((article)=>{

                let div1 = document.createElement("div");

                let title = document.createElement("p");
                title.innerText = article.title;

                let time = document.createElement("p");
                time.innerText = article.publishedAt;

                div1.append(title, time);

                let div2 = document.createElement("div");

                let description = document.createElement("p");
                description.innerText = article.description;
                description.classList.add("description");

                div2.append(description);

                let div3 = document.createElement("div");

                let image = document.createElement("img");
                image.src = article.urlToImage;

                div3.append(image);

                container.append(div1, div2, div3);

            })
        }

    topNews();

    function nextPage(){

        window.location.assign("./search.html");
    }