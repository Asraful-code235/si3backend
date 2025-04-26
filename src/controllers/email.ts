import { Request, Response, NextFunction } from "express";
import { EmailService } from "../services/email";
import { logger } from "../utils/logger";
import {
  diversityTrackerSchema,
  emailSchema,
  partnerProgramSchema,
} from "../utils/schema";

const emailService = new EmailService();

const partnerProgramEmailSchema = emailSchema.extend({
  data: partnerProgramSchema,
});

const diversityTrackerEmailSchema = emailSchema.extend({
  data: diversityTrackerSchema,
});

export const sendPartnerProgramEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { to, data } = partnerProgramEmailSchema.parse(req.body);

    await emailService.sendPartnerProgramEmail(data, to);

    logger.info(`Partner Program email sent to ${to}`);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    logger.error("Error sending Partner Program email:", error);
    next(error);
  }
};

export const sendDiversityTrackerEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { to, data } = diversityTrackerEmailSchema.parse(req.body);

    await emailService.sendDiversityTrackerEmail(data, to);

    logger.info(`Diversity Tracker email sent to ${to}`);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    logger.error("Error sending Diversity Tracker email:", error);
    next(error);
  }
};
