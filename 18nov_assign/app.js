const express = require("express");

const books = require("./books.json");
const app = express();

app.use(express.json());

const middle = (req, res, next)=>{
    console.log("its working");
    next();
}



//show all users on home page
app.get("/",middle, (req, res)=>{

    res.send({books});
});

// post a new user with all details
app.post("/books", (req, res)=>{

    const newUser = [...books, req.body];

    res.send(newUser);
})

// get user with specific id

app.get("/books/:id", (req, res)=>{

    const newUser = books.filter((book)=> book.id === +req.params.id);
    console.log(newUser , req.params.id);
    res.send(newUser);
})

// change details using patch

app.patch("/books/:id", (req, res)=>{

    const data = books.map((book)=>{

        if(+req.params.id === book.id){
           if(req?.body?.author)book.author = req.body.author;

           if(req?.body?.published)book.published = req.body.published;

        }

        return book; 
    });
    res.send(data); 
});

// to delete a certain data

app.delete("/books/:id", (req, res)=>{

    const newUser = books.filter((book)=>book.id != req.params.id);

    res.send(newUser);
});

app.listen(2435, function(){

    console.log("listening on 2435");
})