const { MongoClient } = require("mongodb");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbFunction = async (dbName) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  console.log("connected!");
  await db.collection("Destinations");
  console.log(db.collection, "looloo");
  client.close();
  console.log("disconnected!");
};
dbFunction("BBL");
