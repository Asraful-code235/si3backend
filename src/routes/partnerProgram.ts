import express from "express";
import { createPartnerProgram } from "../controllers/partnerProgram";
import { validatePartnerProgram } from "../middleware/validate";
import asyncHandler from "../middleware/asyncHandler";

const router = express.Router();

router.post("/", validatePartnerProgram, asyncHandler(createPartnerProgram));

export default router;
