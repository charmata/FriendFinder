var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("app/public"));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
