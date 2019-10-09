
let friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let totalDiff = 0;

    let matchedFriend = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    let b = userScores.map(function(item) {
      return parseInt(item, 10);
    });

    let arrSummed = b.reduce((a, b) => a + b, 0);

    for (let i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDiff = 0;
      console.log("Total Diff " + totalDiff);
      console.log("Best match friend diff " + matchedFriend.friendDifference);
      let bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score " + bfriendScore);
      totalDiff += Math.abs(arrSummed - bfriendScore);
      console.log("-------------------------> " + totalDiff);

      if (totalDiff <= matchedFriend.friendDifference) {
        matchedFriend.name = friends[i].name;
        matchedFriend.photo = friends[i].photo;
        matchedFriend.friendDifference = totalDiff;
      }
      console.log(totalDiff + " Total Difference");
    }
    res.json(matchedFriend);
  });
};