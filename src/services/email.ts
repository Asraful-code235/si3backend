import { logger } from "../utils/logger";
import { emailConfig, etherMailConfig } from "../config/email";
import {
  partnerProgramEmailTemplate,
  diversityTrackerEmailTemplate,
} from "../utils/htmlTemplates";

export class EmailService {
  private transporter: any;

  constructor() {
    // Use EtherMail if available, else fallback to Nodemailer
    this.transporter = process.env.ETHERMAIL_API_KEY
      ? etherMailConfig()
      : emailConfig();
  }

  async sendPartnerProgramEmail(data: any, to: string): Promise<void> {
    try {
      const html = partnerProgramEmailTemplate(data);
      await this.transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject: "Partner Program Submission Confirmation",
        html,
      });
      logger.info(`Email sent to ${to}`);
    } catch (error) {
      logger.error("Error sending partner program email:", error);
      throw new Error("Failed to send email");
    }
  }

  async sendDiversityTrackerEmail(data: any, to: string): Promise<void> {
    try {
      const html = diversityTrackerEmailTemplate(data);
      await this.transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject: "Diversity Tracker Submission Confirmation",
        html,
      });
      logger.info(`Email sent to ${to}`);
    } catch (error) {
      logger.error("Error sending diversity tracker email:", error);
      throw new Error("Failed to send email");
    }
  }
}
