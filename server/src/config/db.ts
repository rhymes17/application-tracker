import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("No connection URL found!");
    }
    const connection = await mongoose.connect(mongoURI);
    console.log(connection.connection.host, "Database connected!!");
  } catch (error: any) {
    throw new Error(`Could not connect to the DB, ${error.message}`);
  }
};
