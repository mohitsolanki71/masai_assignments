const express = require('express');

const userController = require("./controller/user.controller");

const galleryController = require("./controller/galary.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/multiple", galleryController);

module.exports = app;