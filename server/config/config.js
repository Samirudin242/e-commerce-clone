const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";


const dbName = "e-commerce";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db;

function connect(callback) {
  client.connect(function (err) {
    if (err) {
      console.log("err connection to mongo", err);
    } else {
      console.log("succesefully connect to mongo");
      db = client.db(dbName);
    }
    callback(err);
  });
}

function getDatabase() {
  return db;
}

module.exports = {
  connect,
  getDatabase,
};
