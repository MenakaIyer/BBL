const express = require("express");

const path = require("path");

const PORT = 6369;
console.log("Mo money ");

const {
  getDestinations,
  getDestination,
  getMessages,
} = require("./src/handlers/handler");

const app = express();

app.get("/destinations", getDestinations);
// app.post("/newmessages")
app.get("/BBL/:id", getDestination);
app.get("/getmessages", getMessages);
// Serving app on PORT we defined
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
