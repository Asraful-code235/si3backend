import { z } from "zod";

export const partnerProgramSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  companyName: z.string().min(1, "Company name is required"),
  interests: z.array(z.string()).min(1, "At least one interest is required"),
  details: z.string().optional(),
  newsletter: z.boolean().default(false),
});

export const diversityTrackerSchema = z.object({
  selfIdentity: z.string().min(1, "Self identity is required"),
  ageRange: z.string().min(1, "Age range is required"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
  disability: z.string().min(1, "Disability status is required"),
  sexualOrientation: z.string().min(1, "Sexual orientation is required"),
  equityScale: z
    .number()
    .min(1)
    .max(10, "Equity scale must be between 1 and 10"),
  improvementSuggestions: z.string().optional(),
  grantProvider: z.string().optional(),
  grantRound: z.string().optional(),
  suggestions: z.string().optional(),
  activeGrantsParticipated: z.string().optional(),
});

export const emailSchema = z.object({
  to: z.string().email("Invalid recipient email"),
});
