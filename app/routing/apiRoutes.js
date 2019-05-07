var path = require("path");
var friends = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    friends.push({ name: req.body.name, photo: req.body.photo, scores: req.body.scores });
    res.send("Successfully added friend");
  });
};
