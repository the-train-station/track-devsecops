/**
 * Sample Node.js server with FAKE secrets for GitGuardian training.
 *
 * WARNING: All credentials below are FAKE and intentionally placed
 * for secrets-detection training purposes.
 */

const express = require("express");
const app = express();

// FAKE - FOR TRAINING ONLY: These are not real credentials
const DATABASE_URL =
  "postgresql://admin:SuperSecret123!@db.example.com:5432/production";

// FAKE - FOR TRAINING ONLY: This is not a real API key
const STRIPE_SECRET_KEY = "sk_test_FAKE_REPLACE_WITH_REAL_KEY_FOR_DETECTION";

// FAKE - FOR TRAINING ONLY: This is not a real token
const GITHUB_TOKEN = "ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef12";

// FAKE - FOR TRAINING ONLY: This is not a real key
const SENDGRID_API_KEY =
  "SG.fake_key_1234567890.abcdefghijklmnopqrstuvwxyz123456789ABCDEF";

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Secrets detection lab" });
});

app.get("/config", (req, res) => {
  // Bad practice: exposing configuration in an endpoint
  res.json({
    database: DATABASE_URL,
    stripe: STRIPE_SECRET_KEY,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
