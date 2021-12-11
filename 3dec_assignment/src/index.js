const express = require("express");

const {register, login} = require("./controller/auth.controller");

const postController = require("./controller/post.controlle");

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/post", postController);

module.exports = app;
