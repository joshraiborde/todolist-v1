const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
let now = new Date();

let items = [];
// let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    items.push(item)
//   console.log(item);
res.redirect("/");
});

app.listen(port, () => {
  console.log("Server started on port: " + port + " on " + now.toUTCString());
});
