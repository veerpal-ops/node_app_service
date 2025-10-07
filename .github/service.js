// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config(); // for environment variables

// Create an Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Example route
app.get("/", (req, res) => {
  res.send("Node App Service is running successfully!");
});

// Database connection (if using MongoDB)
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/node_app_service", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

module.exports = app;
