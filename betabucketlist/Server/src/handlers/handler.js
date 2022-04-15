"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const DB_NAME = "BBL";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getDestinations = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(DB_NAME);
  let dList = await db.collection("Destinations").find().toArray();
  console.log(dList);
  client.close();

  if (!dList) {
    res.status(404).json({
      message: "NO DESTINATIONS FOR YOU FOOL!",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: dList,
    });
  }
};

module.exports = { getDestinations };