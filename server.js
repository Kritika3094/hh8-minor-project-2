const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

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
