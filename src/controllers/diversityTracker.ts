import { Request, Response, NextFunction } from "express";
import DiversityTracker, {
  IDiversityTracker,
} from "../models/diversityTracker";
import { EmailService } from "../services/email";
import { logger } from "../utils/logger";

const emailService = new EmailService();

export const createDiversityTracker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      selfIdentity,
      ageRange,
      ethnicity,
      disability,
      sexualOrientation,
      equityScale,
      improvementSuggestions,
      grantProvider,
      grantRound,
      suggestions,
      activeGrantsParticipated,
    } = req.body;

    const diversityTracker: IDiversityTracker = await DiversityTracker.create({
      selfIdentity,
      ageRange,
      ethnicity,
      disability,
      sexualOrientation,
      equityScale,
      improvementSuggestions,
      grantProvider,
      grantRound,
      suggestions,
      activeGrantsParticipated,
    });

    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    await emailService.sendDiversityTrackerEmail(diversityTracker, adminEmail);

    logger.info(`Diversity Tracker created and email sent to ${adminEmail}`);
    res.status(201).json(diversityTracker);
  } catch (error) {
    logger.error("Error creating diversity tracker:", error);
    next(error);
  }
};
