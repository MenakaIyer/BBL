// const messages = require("./src/Assets/messages.json");

// const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const { MONGO_URI } = process.env;
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const batchImport = async () => {
//   const client = new MongoClient(MONGO_URI, options);
//   await client.connect();
//   const db = client.db("BBL");
//   const result = await db.collection("messages").insertMany(messages);
//   console.log(result);

//   client.close();
// };

// batchImport();
