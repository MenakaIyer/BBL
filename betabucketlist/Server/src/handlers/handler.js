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

// const newMessage = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);
//   await client.connect();
//   const db = client.db(DB_NAME);
//   let msgs = await db.collection("messages").find().toArray();
//   console.log(msgs, "msgs");
//   client.close();

//   if (!msgs) {
//     res.status(404).json({
//       message: "NO DESTINATIONS FOR YOU FOOL!",
//     });
//   } else {
//     res.status(200).json({
//       status: 200,
//       data: msgs,
//     });
//   }
// };
// const addEmployee = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);
//   const db = client.db("employee_1");
//   const { employeeID, firstName, lastName, address, phone, title } = req.body; //
//   // const id = uuidv4();

//   const employee = {
//     // _id: id,
//     employeeID,
//     firstName,
//     lastName,
//     phone,
//     address,
//     title,
//   };
//   try {
//     await client.connect();
//     const result = await db.collection("employee").insertOne(employee);
//     res.status(200).json({
//       message: "Employee added successfully",
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error adding employee",
//       error,
//     });
//   }
//   client.close();
// };

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

module.exports = { getDestinations, getDestination, getMessages };
