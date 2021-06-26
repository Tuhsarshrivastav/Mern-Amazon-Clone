//include library
const mongoose = require("mongoose");
const assert = require("assert");

//Establish Database Connection
mongoose.connect(
  process.env.DB,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  (error, link) => {
    // checking the database connection error
    assert.strictEqual(error, null, "Db Connect Fail...");
    //Database connect success
    console.log(link, "Database Connected Successfully");
  }
);
