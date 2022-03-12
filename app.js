const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
var now = new Date();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
    var item = req.body.newItem;
    items.push(item)
//   console.log(item);
res.redirect("/");
});

app.listen(port, () => {
  console.log("Server started on port: " + port + " on " + now.toUTCString());
});
