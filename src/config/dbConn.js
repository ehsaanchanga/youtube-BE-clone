import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
