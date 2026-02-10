const express = require("express");
const app = express();

const PORT = 3000;

// Normal route
app.get("/", (req, res) => {
  res.send("SentinelAI backend is running");
});

// Error route (this is intentional)
app.get("/test-error", (req, res) => {
  throw new Error("Intentional test error for SentinelAI");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
