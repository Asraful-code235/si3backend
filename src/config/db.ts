import mongoose from "mongoose";
import { logger } from "../utils/logger";
import dotenv from "dotenv";

dotenv.config();

let cachedConnection: Promise<typeof mongoose> | null = null;

const connectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState === 1) {
    logger.info("Using existing MongoDB connection");
    return;
  }

  if (cachedConnection) {
    logger.info("Reusing cached MongoDB connection promise");
    await cachedConnection;
    return;
  }

  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI not defined");
    }

    cachedConnection = mongoose.connect(mongoURI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    await cachedConnection;
    logger.info("MongoDB connected");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    cachedConnection = null;
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  logger.info("Mongoose connected to MongoDB");
});

mongoose.connection.on("disconnected", () => {
  logger.warn("Mongoose disconnected from MongoDB");
});

mongoose.connection.on("error", (err) => {
  logger.error("Mongoose connection error:", err);
  cachedConnection = null;
});

export default connectDB;
