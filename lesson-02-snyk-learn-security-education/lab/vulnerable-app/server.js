/**
 * Intentionally vulnerable Express server for Snyk scanning training.
 * DO NOT deploy this application - it contains known vulnerabilities.
 */

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.json());

// Vulnerable: lodash < 4.17.21 is susceptible to prototype pollution
app.post("/api/merge", (req, res) => {
  const base = { role: "user" };
  const merged = _.merge(base, req.body);
  res.json(merged);
});

// Vulnerable: jsonwebtoken < 9.0.0 has algorithm confusion attacks
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ user: username, role: "admin" }, "secret-key");
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.get("/api/verify", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, "secret-key");
    res.json({ user: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Vulnerable: ejs < 3.1.7 is susceptible to server-side template injection
app.get("/api/render", (req, res) => {
  const template = req.query.template || "Hello <%= name %>";
  const name = req.query.name || "World";
  const output = ejs.render(template, { name });
  res.send(output);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Vulnerable app running on port ${PORT}`);
  console.log("WARNING: This app has intentional vulnerabilities for training");
});
