//server lo start kerna  
//or data base se connect karne ke liye
require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})