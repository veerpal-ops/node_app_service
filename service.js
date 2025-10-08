const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node App Service is running successfully!");
});


app.get("/name", (req, res) => {
  res.send("Hello from Veerpal’s Node App on Azure!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
