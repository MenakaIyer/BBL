// const destinations = require("./destinations.json");
// const messages = require("./messages.json");
const users = require("./users.json");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("BBL");
  // const result = await db.collection("Destinations").insertMany(destinations);
  const result2 = await db.collection("users").insertMany(users);
  console.log(result2);
  // console.log(result);

  client.close();
};

batchImport();
