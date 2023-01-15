import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("Secrets Not Defined");
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
  } catch (err) {
    console.log("DB Connection couldn't be established :", err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000 !!");
  });
};

start();
