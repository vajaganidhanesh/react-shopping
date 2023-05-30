var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();
var mongoString = "mongodb://localhost:27017";

app.get("/connect", (req, res) => {
  mongoClient
    .connect(mongoString)
    .then((obj) => {
      var database = obj.db("tutorial");
      database
        .collection("customer")
        .find({})
        .toArray()
        .then((documents) => {
          res.send(documents);
          res.end();
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/registercustomer", (req, res) => {
  let customerData = {
    userName: req.body.userName,
  };
});

app.listen(4000);
console.log("server is running and up");
