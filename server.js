// Madison Kendall note taker pro app code
const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db")

const app = express();

app.use(express.urlendcoded({ extended: true }));
app.use(express.json());





app.listen(3000, function(){
  console.log("server is running on port 3000!");
});
