import express from "express";
import { createDiversityTracker } from "../controllers/diversityTracker";
import { validateDiversityTracker } from "../middleware/validate";
import asyncHandler from "../middleware/asyncHandler";

const router = express.Router();

router.post(
  "/",
  validateDiversityTracker,
  asyncHandler(createDiversityTracker)
);

export default router;
