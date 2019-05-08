var path = require("path");
var friends = require("../data/friends");

var findFriend = user => {
  var diff = [];
  friends.forEach((friend, i) => {
    var user2 = friend.scores;
    var total = 0;
    user2.forEach((score, i) => {
      total += Math.abs(user[i] - score);
    });
    diff[i] = total;
  });
  var match = diff.indexOf(Math.min(...diff));
  return friends[match];
};

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    var scores = [];
    if (req.is("application/json")) {
      scores = req.body.scores;
    } else {
      Object.keys(req.body).forEach(key => {
        if (key.includes("q-")) {
          scores.push(parseInt(req.body[key]));
        }
      });
    }
    var newFriend = { name: req.body.name, photo: req.body.photo, scores: scores };
    var friend = findFriend(newFriend.scores);
    res.json(friend);
    friends.push(newFriend);
  });
};
