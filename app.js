const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
var now = new Date();

app.get("/", (req, res)=>{

    var today = new Date();
    var currentDay = today.getDay()

    if (currentDay === 6 || currentDay === 0) { // tests to see if it's a Sat or Sun
        res.write("<h1>It's the Weekend because it is " + today.toUTCString() + "!</h1>")
    } else {
        res.sendFile(__dirname + "/index.html")
    }


    // res.send("Hello");
});

app.listen(port, ()=>{
    console.log("Server started on port: " + port + " on " + now.toUTCString());
})