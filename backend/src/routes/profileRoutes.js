// routes/profileRoutes.js
import express from "express";
import { getProfile, upsertProfile } from "../controllers/profileController.js";
import { protect } from "../middleware/authMiddleware.js"; // protect import et

const router = express.Router();

router.get("/", getProfile);
router.post("/", protect, upsertProfile); // sadece token varsa upsert

export default router;
