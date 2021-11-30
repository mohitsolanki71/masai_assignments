const connect = require("./configs/db");

const app = require("./app");

app.listen(2459, async function(){

    await connect();
    console.log("listening on port 2459");
});