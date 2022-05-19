const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

// Setting Port
app.set("port", process.env.PORT || 8080);
// Setting Views
app.set("views", path.join(__dirname, "views"));
// Setting views engine ejs
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));

// Routes
app.use(require("./routes"));

// Static files folder
app.use(express.static(path.join(__dirname, "public")));

// Listening the Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});