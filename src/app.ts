import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import routes from "./routes";
import dotenv from "dotenv";
import { errorHandler } from "./utils/errorHandler";
import { logger } from "./utils/logger";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));

const startServer = async () => {
  try {
    await connectDB();
    app.use("/api", routes);

    app.use(errorHandler);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
