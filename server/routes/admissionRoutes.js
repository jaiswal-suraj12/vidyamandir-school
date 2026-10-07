import { Router } from "express";
import { createAdmission, listAdmissions, updateAdmission } from "../controllers/inquiryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();
router.post("/", createAdmission);
router.get("/", protect, listAdmissions);
router.patch("/:id", protect, updateAdmission);
export default router;