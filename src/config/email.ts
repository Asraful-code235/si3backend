import nodemailer from "nodemailer";
import { logger } from "../utils/logger";

export const emailConfig = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
};

export const etherMailConfig = () => {
  logger.warn("EtherMail not configured; using Nodemailer fallback");
  return emailConfig();
};
