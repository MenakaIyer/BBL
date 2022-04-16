"use strict";

const { MongoClient, ObjectId } = require("mongodb");
const { parse } = require("path");
require("dotenv").config();
const { MONGO_URI } = process.env;
const DB_NAME = "BBL";
const ObjectID = require("mongodb").ObjectID;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getDestinations = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(DB_NAME);
  let dList = await db.collection("Destinations").find().toArray();
  console.log(dList, "dList");
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

const getDestination = async (req, res) => {
  const { id } = req.params;
  console.log(id, "Paramsid");
  const _id = ObjectId(id);

  console.log(ObjectId, "objid???");

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(DB_NAME);

  let des = await db.collection("Destinations").findOne(_id);
  console.log(des, "des");
  client.close();
  if (!des) {
    res.status(404).json({
      message: "NO DESTINATIONS FOR YOU FOOL!",
    });
  } else {
    res.status(204).json({
      status: 204,
      data: des,
    });
  }
};

module.exports = { getDestinations, getDestination };
