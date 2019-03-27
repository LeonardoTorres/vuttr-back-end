require('./src/env.config');
require('./src/db.connection');

const express = require('express');
const appRouters = require('./src/routers');


const app = express();


app.use(express.json());
app.use("/", appRouters);



const port = process.env.PORT || 3000;


app.listen(port, () =>{
  console.log("Server is running on", port);
});


