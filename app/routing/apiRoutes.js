
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
      friendDifference: 50
    };

    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    let userSum = userScores.map(function(item) {
      return parseInt(item, 10);
    });



    let arrSum = userSum.reduce((a, b) => a + b, 0);
    console.log(arrSum);

    for (let i = 0; i < friends.length; i++) {
      totalDiff = 0;

      let bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log(friends[i].name, friends[i].scores);

      totalDiff += Math.abs(arrSum - bfriendScore);

      if (totalDiff <= matchedFriend.friendDifference) {
        matchedFriend.name = friends[i].name;
        matchedFriend.photo = friends[i].photo;
        matchedFriend.friendDifference = totalDiff;
      }
    }
    res.json(matchedFriend);
  });
};