import mongoose, { Schema, Document } from "mongoose";

export interface IDiversityTracker extends Document {
  selfIdentity: string;
  ageRange: string;
  ethnicity: string;
  disability: string;
  sexualOrientation: string;
  equityScale: number;
  improvementSuggestions?: string;
  grantProvider?: string;
  grantRound?: string;
  suggestions?: string;
  activeGrantsParticipated?: string;
}

const DiversityTrackerSchema = new Schema<IDiversityTracker>(
  {
    selfIdentity: { type: String, required: true },
    ageRange: { type: String, required: true },
    ethnicity: { type: String, required: true },
    disability: { type: String, required: true },
    sexualOrientation: { type: String, required: true },
    equityScale: { type: Number, required: true, min: 1, max: 10 },
    improvementSuggestions: { type: String },
    grantProvider: { type: String },
    grantRound: { type: String },
    suggestions: { type: String },
    activeGrantsParticipated: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IDiversityTracker>(
  "DiversityTracker",
  DiversityTrackerSchema
);
