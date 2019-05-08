var path = require("path");
var friends = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    var scores = [];
    Object.keys(req.body).forEach(key => {
      if (key.includes("q-")) {
        scores.push(parseInt(req.body[key]));
      }
    });
    friends.push({ name: req.body.name, photo: req.body.photo, scores: scores });
    res.send("Successfully added friend");
  });
};
