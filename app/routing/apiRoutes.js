var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var x = 0;
        var minDifference = 30;

        for (var i = 0; i < friends.length; i++) {
            var differenceCount = 0;
            for (var k = 0; k < friends[i].scores.length; k++) {
                var diff = Math.abs(user.scores[k] - friends[i].scores[k]);
                differenceCount += diff;
            }

            if (differenceCount < minDifference) {
                x = i;
                minDifference = differenceCount;
            }
        }

        friends.push(user);

        res.json(x);
    });
};
