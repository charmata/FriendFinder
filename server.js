var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routing/htmlRoutes");
require("./app/routing/apiRoutes");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
