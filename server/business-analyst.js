var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express());

var mongoString = "mongodb://127.0.0.1:27017/";

app.get("/customerdata", (req, res) => {
  mongoClient
    .connect(mongoString)
    .then((obj) => {
      var database = obj.db("tutorial");
      database
        .collection("customers")
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
  var customerData = {
    UserName: req.body.UserName,
    UserId: req.body.UserId,
    Password: req.body.Password,
    Age: parseInt(req.body.Age),
    Email: req.body.Email,
    Mobile: req.body.Mobile,
  };
  mongoClient.connect(mongoString).then((obj) => {
    var database = obj.db("tutorial");
    database
      .collection("customers")
      .insertOne(customerData)
      .then(() => {
        console.log("Record Inserted");
        res.redirect("/customerdata");
      });
  });
});

app.listen(4000);
console.log(`server is running and up : ${mongoString}`);
