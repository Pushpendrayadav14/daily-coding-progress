const mongoose = require("mongoose");
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Data base connected successfully...");
  } catch (err) {
    console.log(`some thing wrong database is not connected...${err}`);
  }
}

module.exports = connectToDB;

