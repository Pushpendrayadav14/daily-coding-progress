const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connect to the database");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = connectToDB;
