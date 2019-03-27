const mongoose = require("mongoose");

class Connection {
  constructor() {  
    this.onError();
    this.onConnected();
    this.createConnection();
  }

  onError() {
    mongoose.connection.on("error", e => {
      console.log("mongoose connection error", JSON.stringify(e));
      setTimeout(this.createConnection, 3000);
      
    });
  }

  onConnected(){
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected", );
      mongoose.set('useFindAndModify', false);
    });
  }

  createConnection() {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vuttrdb', {
      useNewUrlParser: true,
      reconnectTries: 30,
      reconnectInterval: 500
    });
    
  }
}

module.exports = new Connection();
