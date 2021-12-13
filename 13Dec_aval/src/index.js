const express = require("express");
const {register, login} = require("./controller/user.controller");

const movieController = require("./controller/movie.controller");
const theaterController = require("./controller/theater.controller");
const screenController = require("./controller/screen.controller");
const showController = require("./controller/show.controller");
const seatController = require("./controller/seat.controller");

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/movie", movieController);
app.use("/theater", theaterController);
app.use("/screen", screenController);
app.use("/show", showController);
app.use("/seat", seatController);

module.exports = app;