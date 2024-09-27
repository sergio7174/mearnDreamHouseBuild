const mongoose = require("mongoose");

const connectDb = async () => {
  try { 
    await mongoose.connect(process.env.MONGO_URI);
    console.log('mongodb connection success!');
  } catch (err) {
    console.log('mongodb connection failed!', err.message);
  }
};

module.exports = connectDb;