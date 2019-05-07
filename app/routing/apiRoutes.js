app.get("/api/friends", (req, res) => {
  res.json();
});

app.post("/api/friends", (req, res) => {
  res.send("Successfully added friend");
});
