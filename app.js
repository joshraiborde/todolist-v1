const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
var now = new Date();

app.get("/", (req, res){
    res.send("Hello");
});

app.listen(port, ()=>{
    console.log("Server started on port: " + port + " on " + now.toUTCString());
})