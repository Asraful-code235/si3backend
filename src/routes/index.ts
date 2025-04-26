import express from "express";
import partnerProgramRoutes from "./partnerProgram";
import diversityTrackerRoutes from "./diversityTracker";

const router = express.Router();

router.use("/partner-program", partnerProgramRoutes);
router.use("/diversity-tracker", diversityTrackerRoutes);

export default router;
