var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
require("./app/routing/apiRoutes")(app, path);
require("./app/routing/htmlRoutes")(app, path);

//Starts the server
app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});