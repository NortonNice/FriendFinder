var express = require("express");
var app = express();
var path = require("path");
var PORT = 3000;




app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port " + PORT)
});