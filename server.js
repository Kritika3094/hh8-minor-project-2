const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const PORT = 3000;


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let comments = []; // Stored comments (vulnerable)

app.get("/", (req, res) => {
  res.render("index", { comments });
});

app.post("/comment", (req, res) => {
  comments.push(req.body.comment); // NO validation (XSS)
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/search", (req, res) => {
  res.render("reflected", { query: req.query.q });
});
app.get("/dom", (req, res) => {
  res.render("dom");
});
app.get("/set-cookie", (req, res) => {
  res.cookie("sessionID", "KRITIKA123");
  res.send("Cookie set!");
});

app.get("/secure", (req, res) => {
  res.render("secure", { comments });
});

app.post("/secure-comment", (req, res) => {
  comments.push(req.body.comment);
  res.redirect("/secure");
});
