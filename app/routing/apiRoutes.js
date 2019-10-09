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

        //console.log(userData.scores);

        for (let i = 0; i < scores.length; i++) {
            totalScore.push(parseInt(scores[i]));
        }
        //console.log(totalScore);
        for (let j = 0; j < friends.length; j++) {
            //console.log(friends[j].name, friends[j].scores)
            var totalDifference = totalScore.map(
                function(a, i) {
                     return Math.abs(a - parseInt(friends[j].scores));
                    });
            console.log(`${friends[j].name}'s total diff from you is is ${totalDifference.reduce((a,b) => a + b, 0)}`);

        }


        //console.log(totalScore);
        //friends.push(userData);
        //console.log(friends);
        //let friendsScores = totalScore.scores;

    })

    //compare userData score variance against the score of all other friends scores in the database (friends-variable)
    //calculate the score of each friend and push it to an array - keep the friend name
    //

}