// server ko start kerna and database se conect kerna
require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/dataBase");

connectToDb();

app.listen(3000, () => {
  console.log("server is runninrg on port 3000");
});
