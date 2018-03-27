const express = require("express"),
      morgan = require("morgan"),
      bodyParser = require("body-parser"),
      routes = require("./routes/todos");
      


var app = express();
 
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function (req, res) {
    res.send("the root path");
});


app.use("/api/todos", routes);

const port = process.env.PORT || 3000;

app.listen(port, function (req, res) {
    console.log("app is running on port", port);
});