import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./config/dbConn.js";
import { app } from "./app.js";

dotenv.config();

connectDb();

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDb");
  app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port " + process.env.PORT);
    app.on("error", (error) => {
      console.log("Error: " + error);
      throw Error;
    });
  });
});
