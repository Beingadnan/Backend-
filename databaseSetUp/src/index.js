const express = require("express");
const mongoose = require("mongoose");
//import router file
const router = require("./routes/route");
const app = express();
app.use(express.json());

// Moved to route.js file                 
// const router = express.Router();       
// router.get('/', (req, res) => {        
//     return res.send('testing');        
// });

mongoose
  .connect(
    "mongodb+srv://beingadnank78:xVLnW5JhIEjFT2eX@cluster0.dbhfphq.mongodb.net/"
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.use("/", router); // jo export kiya hai wahi likhna hai yhn pe bhi
app.listen(8001, () => {
  console.log("server started at", 8001);
});
