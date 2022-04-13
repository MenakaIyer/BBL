const express = require("express");

const path = require("path");

const PORT = 6369;
console.log("Mo money ");

const app = express();

// applying handler for API
// app.use("/", router);

// Serving app on PORT we defined
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
