const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {

    var options = { weekday: 'long', month: 'long', day: 'numeric'};
    var today = new Date();
    var day = today.toLocaleDateString("en-US", options);
    

    
    res.render('list', {day: day, newItems: items});
});

app.post("/additem", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000!");
});