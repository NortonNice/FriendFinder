var express = require("express");
var app = express();
var PORT = 3000;
var path = require("path");

//Your `htmlRoutes.js` file should include two routes:
// * A GET Route to `/survey` which should display the survey page.
app.get('/survey', function (req, res) {
    res.sendfile(path.join(__dirname, "../public/survey.html"));
});

//A default, catch-all route that leads to `home.html` which displays the home page.
app.get('*', function (req, res) {
    res.sendfile(path.join(__dirname, "../public/home.html"));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port " + PORT)
});
