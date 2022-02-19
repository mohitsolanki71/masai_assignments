const express = require("express");

const connect = require("./config/db");

const teacherController = require("./controller/teacher.controller");
const studentController = require("./controller/student.controller");
const testController = require("./controller/test.controller");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/teacher", teacherController);
app.use("/student", studentController);
app.use("/test", testController);

app.listen(2345, async function () {
  await connect();
  console.log("listening on port 2345");
});
