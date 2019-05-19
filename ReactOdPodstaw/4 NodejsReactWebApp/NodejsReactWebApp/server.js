"use strict";
var path = require("path");
var express = require("express");

var app = express();

var staticPathApp = path.join(__dirname, "/", "App");
var staticPathDist = path.join(__dirname, "/", "dist");
app.use("/", express.static(staticPathApp));
app.use("/dist", express.static(staticPathDist));

// Allows you to set port in the project properties.
app.set("port", process.env.PORT || 3000);

var server = app.listen(app.get("port"), function() {
  console.log("listening");
});
