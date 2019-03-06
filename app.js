const express = require('express');
const mongoose = require('mongoose');
const appRouters = require('./src/routers');

mongoose.connect('mongodb://localhost:27017/bossamongo', {useNewUrlParser:true});

const app = express();


app.use(express.json());
app.use("/", appRouters);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () =>{
  console.log("Server is running");
});


