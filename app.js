const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();



//config
dotenv.config();
app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

// connect db
const connectionString = process.env.DB_URI;
const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connectionString, connectOptions)
  .then(() =>
    console.log("connected db")
  ).catch(()=>{
    console.log('connect db fail')
  });


//routing
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// app listening
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
