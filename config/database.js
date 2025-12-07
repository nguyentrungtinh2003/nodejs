import mongoose from "mongoose";

const connectDB = () => {
  try {
    const connectInstant = mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Database connected successfully");
    return connectInstant;
  } catch (error) {
    console.log("Database connection failed", error);
  }
};

export default connectDB;
