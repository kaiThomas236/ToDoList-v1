const express = require("express");
const bodyParser = require("body-parser");
const day = require(__dirname + "/date.js").getDay();

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = ["Check Email", "Finish Presentation", "3p Meeting"];

app.get("/", function (req, res) {
    res.render('list', {day: day, subtitle: "To Do List", newItems: items});
});

app.post("/additem", function(req, res){
    let item = req.body.newItem;
    if (req.body.submit === "Work To Do List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    };
});

app.get("/work", function(req, res){
    res.render("list", {day: day, subtitle: "Work To Do List", newItems: workItems});
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000!");
});