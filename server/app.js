require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongo = require("./config/config");

const server = require("./orchestrator/index");

mongo.connect(function (err) {
  if (!err) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use("/", require("./routers/router"));
    app.listen(port, function () {
      console.log("server is running on PORT " + port);
    });
  }
});
