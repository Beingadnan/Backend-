import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.mjs";
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://beingadnank78:xVLnW5JhIEjFT2eX@cluster0.dbhfphq.mongodb.net/"
  )
  .then(() => console.log("database connected sucessfully"))
  .catch((err) => console.log(err.message));

app.use("/", router);
app.listen(8000, () => {
  console.log("server started at", 8000);
});
