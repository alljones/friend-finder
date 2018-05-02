//=========================
// Variables
//=========================
var friends = require("../data/friends"); //retrieve data from data/friends.js file

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var userOne = req.body;
    var userOneScore = userOne.score;
    var scoreDiff;
    for (var i = 0; i < friends.length; i++) {
      scoreDiff = 0;
      var currentMatch = friends[i];
      for (var x = 0; x < currentMatch.score.length; x++) {
        var matchFriendScore = currentMatch.score[x];
        var matchUserScore = userOneScore[x];
        scoreDiff =
          scoreDiff +
          Math.abs(parseInt(matchFriendScore) - parseInt(matchUserScore)); //Returns Absolute Value (No Neg Vals)
      }
    }
  });
};
