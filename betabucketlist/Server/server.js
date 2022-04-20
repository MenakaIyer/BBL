const express = require("express");

const path = require("path");

const PORT = 6369;
console.log("Mo money ");

const {
  getDestinations,
  getDestination,
  getMessages,
  nMessage,
  getMessagesById,
  getUsers,
  getCurrentUser,
} = require("./src/handlers/handler");

const app = express();
app.use(express.json());

app.get("/destinations", getDestinations);
app.post("/new-messages", nMessage);
app.get("/BBL/:id", getDestination);
app.get("/get-messages", getMessages);
app.get("/get-messages/:id", getMessagesById);
app.get("/getUsers", getUsers);
app.get("/BetaBL/:name", getCurrentUser);
// Serving app on PORT we defined
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
