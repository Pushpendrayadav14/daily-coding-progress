require("dotenv").config();
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Data Base is connected successfully..");
    return connection;
  } catch (err) {
    console.error(`something wrong: ${err.message}`);
    throw new Error("Database connection failed");
  }
}

module.exports = connectToDB;
