var express = require("express");
var app = express();


/*3. Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. */

   /*order matters: the first route that matches the request will be the only one that is run*/

  
   app.get("/", function(req, res){
       res.send("Welcome to the homepage");
   });