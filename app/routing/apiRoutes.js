var express = require("express");
var app = express();
var PORT = 3000;
var path = require("path");
var friendRecs = require("../data/friends")


    // 4. Your `apiRoutes.js` file should contain two routes:
    // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get('/api/friends', function (req, res) {
        res.json(friendRecs);
    });
    //  A POST routes `/api/friends`. This will be used to handle incoming survey results.
    //  This route will also be used to handle the compatibility logic. 
    app.post('/api/friends', function (req, res) {
        res.sendfile(path.join(__dirname, "../data/friends.js"));
    });

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port " + PORT)
});