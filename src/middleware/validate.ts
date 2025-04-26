import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { diversityTrackerSchema, partnerProgramSchema } from "../utils/schema";

export const validatePartnerProgram = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    partnerProgramSchema.parse(req.body);
    next();
  } catch (error) {
    logger.error("Partner Program validation error:", error);
    res.status(400).json({ error: "Invalid input", details: error });
  }
};

export const validateDiversityTracker = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    diversityTrackerSchema.parse(req.body);
    next();
  } catch (error) {
    logger.error("Diversity Tracker validation error:", error);
    res.status(400).json({ error: "Invalid input", details: error });
  }
};
