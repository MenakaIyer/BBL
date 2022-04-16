const express = require("express");

const path = require("path");

const PORT = 6369;
console.log("Mo money ");

const { getDestinations, getDestination } = require("./src/handlers/handler");

const app = express();

app.get("/destinations", getDestinations);
// app.get("/BBL/:Country", getDestination);

// Serving app on PORT we defined
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
