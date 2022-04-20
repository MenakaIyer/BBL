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
    res.status(200).json({
      status: 200,
      data: des,
    });
  }
};

const nMessage = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(DB_NAME);
  // const { newMessage, image } = req.body;
  // console.log(req.body, "*******");
  // const messageObj = {
  //   newMessage,
  //   image,
  //   timeStamp,
  //};
  let msgs = await db.collection("messages").insertOne(req.body);
  console.log(msgs, "msgs");
  client.close();

  if (!msgs) {
    res.status(404).json({
      message: "NO DESTINATIONS FOR YOU FOOL!",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: msgs,
    });
  }

  client.close();
};

const getMessagesById = async (req, res) => {
  const { id } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(DB_NAME);
  let msgs = await db.collection("messages").find({ id }).toArray();
  console.log(msgs, "msgs");
  client.close();

  if (!msgs) {
    res.status(404).json({
      message: "NO MOMO!",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: msgs,
    });
  }
};

const getMessages = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(DB_NAME);
  let msgs = await db.collection("messages").find().toArray();
  console.log(msgs, "msgs");
  client.close();

  if (!msgs) {
    res.status(404).json({
      message: "NO MOMO!",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: msgs,
    });
  }
};

const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db(DB_NAME);
  let usersList = await db.collection("users").find().toArray();
  console.log(usersList, "usersList");
  client.close();

  if (!usersList) {
    res.status(404).json({
      message: "NO DESTINATIONS FOR YOU FOOL!",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: usersList,
    });
  }
};

const getCurrentUser = (req, res) => {
  const name = req.body.name;
  const client = new MongoClient(MONGO_URI, options);
  client.connect();
  const db = client.db(DB_NAME);
  let currUser = db.collection("users").find(name);
  console.log(currUser, "currUser");
  client.close();
  if (!currUser) {
    res.status(404).json({
      message: "user not found!",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: currUser,
    });
  }
};

module.exports = {
  getMessagesById,
  getDestinations,
  getDestination,
  getMessages,
  nMessage,
  getUsers,
  getCurrentUser,
};
