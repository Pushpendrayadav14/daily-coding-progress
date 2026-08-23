const app = require("./src/app");
const connectToDB = require("./src/config/dataBase");

connectToDB();
app.listen(3000, () => {
  console.timeLog("server is running on the port 3000...");
});
