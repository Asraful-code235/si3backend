import mongoose, { Schema, Document } from "mongoose";

export interface IPartnerProgram extends Document {
  name: string;
  email: string;
  companyName: string;
  interests: string[];
  details?: string;
  newsletter: boolean;
}

const PartnerProgramSchema = new Schema<IPartnerProgram>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    companyName: { type: String, required: true },
    interests: { type: [String], required: true },
    details: { type: String },
    newsletter: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IPartnerProgram>(
  "PartnerProgram",
  PartnerProgramSchema
);
