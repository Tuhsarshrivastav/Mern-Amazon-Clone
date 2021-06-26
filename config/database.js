//include library
const mongoose = require("mongoose");
const assert = require("assert");

//Establish Database Connection
const ConnectDb = async () => {
  try {
    const response = await mongoose.connect(process.env.DB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log("Database is Connnected");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = ConnectDb;
