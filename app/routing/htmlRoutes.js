var express = require("express");
var app = express();
var PORT = 3000;
var path = require("path");

//Your `htmlRoutes.js` file should include two routes:
// * A GET Route to `/survey` which should display the survey page.
app.get('/survey', (req, res) => res.sendFile("/survey.html"))//FIND OUT HOW TO SERVE THIS FILE//
//A default, catch-all route that leads to `home.html` which displays the home page.

//order matters: the first route that matches the request will be the only one that is run

  
   app.get("/", function(req, res){
       res.send("Welcome to the homepage");
   });

   app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port " + PORT)
});