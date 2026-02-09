const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

// ===== VIEW ENGINE + LAYOUT =====
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout"); // uses views/layout.ejs

// ===== MIDDLEWARE =====
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// ===== DATA STORE =====
let comments = []; // vulnerable storage

// ===== HOME REDIRECT =====
app.get("/", (req, res) => {
  res.redirect("/stored");
});


// ================= STORED XSS =================
app.get("/stored", (req, res) => {
  res.render("stored", { comments });
});

app.post("/comment", (req, res) => {
  comments.push(req.body.comment); // no sanitization (vulnerable)
  res.redirect("/stored");
});


// ================= REFLECTED XSS =================
app.get("/reflected", (req, res) => {
  res.render("reflected", { query: req.query.q || "" });
});


// ================= DOM XSS =================
app.get("/dom", (req, res) => {
  res.render("dom");
});


// ================= SECURE PAGE =================
app.get("/secure", (req, res) => {
  res.render("secure", { comments });
});

app.post("/secure-comment", (req, res) => {
  comments.push(req.body.comment); // safe rendering in EJS
  res.redirect("/secure");
});


// ================= COOKIE DEMO =================
app.get("/set-cookie", (req, res) => {
  res.cookie("sessionID", "KRITIKA123");
  res.send("Cookie Set Successfully");
});


// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
