var friends = require('../data/friends')

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);

    })

    app.post("/api/friends", function(req, res) {
        //send all information here and do calculations
        var userData = req.body;
        var scores = userData.scores
        totalScore = [];

        var userAvg;
        var friendAvg;
        //console.log(userData.scores);

        for (let i = 0; i < scores.length; i++) {
            totalScore.push(parseInt(scores[i]));
        }

        console.log(totalScore);
        //friends.push(userData);
        //console.log(friends);
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i].name, friends[i].scores)
        }



    })

    //compare userData score variance against the score of all other friends scores in the database (friends-variable)
    //calculate the score of each friend and push it to an array - keep the friend name
    //




}