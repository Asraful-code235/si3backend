import { Request, Response, NextFunction } from "express";
import PartnerProgram, { IPartnerProgram } from "../models/partnerProgram";
import { EmailService } from "../services/email";
import { logger } from "../utils/logger";

const emailService = new EmailService();

export const createPartnerProgram = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, companyName, interests, details, newsletter } =
      req.body;

    const partnerProgram: IPartnerProgram = await PartnerProgram.create({
      name,
      email,
      companyName,
      interests,
      details,
      newsletter,
    });

    await emailService.sendPartnerProgramEmail(partnerProgram, email);

    logger.info(`Partner Program created and email sent to ${email}`);
    res.status(201).json(partnerProgram);
  } catch (error) {
    logger.error("Error creating partner program:", error);
    next(error);
  }
};
