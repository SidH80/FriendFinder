
let friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let totalDiff = 0;

    //Best Match friend object used to gather score of least variance
    let matchedFriend = {
      name: "",
      photo: "",
      friendDifference: 50
    };

    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    //returns userScore array
    let userSum = userScores.map(function(item) {
      return parseInt(item, 10);
    });


    //returns user totalled score
    let arrSum = userSum.reduce((a, b) => a + b, 0);
    console.log(arrSum);

    for (let i = 0; i < friends.length; i++) {
      totalDiff = 0;

      //reduces each comparable friend to a raw total score
      let bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);

      //logs the iteration of friend name and scores
      console.log(friends[i].name, friends[i].scores);

      //turns any score from negative to positive int
      totalDiff += Math.abs(arrSum - bfriendScore);

      //logig decides that the least friend score iteration takes place of all scores
      //sends boject name and data to be rendered in HTML
      if (totalDiff <= matchedFriend.friendDifference) {
        matchedFriend.name = friends[i].name;
        matchedFriend.photo = friends[i].photo;
        matchedFriend.friendDifference = totalDiff;
      }
    }

    console.log(userData);

    //matched friend
    res.json(matchedFriend);
  });
};