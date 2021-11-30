const express = require('express');

const userController = require("./controller/user.controller");

const studentController = require("./controller/student.controller");

const topicController = require("./controller/topic.controller");

const evalutaionController = require("./controller/evalutaion.controller");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/students", studentController);
app.use("/topics", topicController);
app.use("/evalutaions", evalutaionController);


module.exports = app;