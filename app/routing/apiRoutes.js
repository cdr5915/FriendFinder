var friends = require("../data/friends.js");

module.exports = function(app) {

        app.get("/api/friends", function(req, res) {
            res.json(friends);
        });

        app.post("/api/friends", function(req, res) {
                var perfectMatch = {
                    name: "",
                    photo: "",
                    numDifference: 1000

                };

                var userData = req.body;
                var userScores = userData.scores;
                var totalDiff = 0
                for (var i = 0; i < friends.length; i++) {

                    totalDiff = 0;

                    for (var j = 0; j < friends[i].scores[j]; j++) {

                        totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                        if (totalDiff <= perfectMatch.numDifference) {

                            perfectMatch.name = friends[i].name;
                            perfectMatch.photo = friends[i].photo;
                            perfectMatch.numDifference = totalDiff;

                        }
                    }
                }
                    // Compatibility logic will go here:

                    // 1)Convert each user's results into a simple array of numbers 
                    // (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

                    // 2)Compare the difference between current user's scores against 
                    // those from other users, question by question. Add up the 
                    // (absolute value of) differences to calculate the totalDifference.

                    // 3)Display the result as a modal pop-up.

                    friends.push(userData);

                    res.json(perfectMatch);

        });

};
