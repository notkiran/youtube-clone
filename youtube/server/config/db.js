const mongoose = require("mongoose");
const config = require("./");

//Connect to DB
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB is connected to: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = dbConnect;
