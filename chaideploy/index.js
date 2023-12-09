const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("amirsohail335");
});

app.get("/twitter1", (req, res) => {
  res.send("amirsohail3351");
});

app.get("/login", (req, res) => {
  console.log("<h1>Login Page</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
