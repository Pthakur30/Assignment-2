const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.static("Images"));

app.get("/Blog", function (req, res) {
  res.sendFile(path.join(__dirname, "/blog.html"));
});

app.get("/article/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "/read_more.html"));
});
app.get("/login", (req, res) => {
  const login = req.login;
  res.send(login);
});
app.get("/registration", function (req, res) {
  res.sendFile(path.join(__dirname, "/registration.html"));
});

function handleClientError(err, req, res, next) {
  logError(err);
  next();
}

app.listen(port);
