import { Router } from "express";
import { createContact, listContacts, updateContact } from "../controllers/inquiryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();
router.post("/", createContact);
router.get("/", protect, listContacts);
router.patch("/:id", protect, updateContact);
export default router;