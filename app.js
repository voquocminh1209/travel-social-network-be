/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan")


const app = express();

// front middleware
app.use(cors())
app.use(bodyParser.json())
app.use(morgan("tiny"))

//routing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// back middleware


// connect db
const uri = process.env.DB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() =>
    console.log("connected db")
  ).catch(()=>{
    console.log('connect db fail')
  });

// app listening
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});



