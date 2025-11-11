import mongoose from "mongoose";

export const connectDB = async (MONGODB_URI) => {
  try {
    const con = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to MongoDB: ${con.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
