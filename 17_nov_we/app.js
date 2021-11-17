const express = require("express");

const users = require("./users.json")
const app = express();

app.get("/",(req, res) => {

    const data = "welcome to homepage"
    res.send(data);
});

app.get("/users",(req, res) => {

    res.send(users);
});


app.listen(2345, function(){

    console.log("listening now");
})