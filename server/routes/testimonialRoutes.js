import { Router } from "express";
import Testimonial from "../models/Testimonial.js";
import { makeCrudController } from "../controllers/crudController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();
const controller = makeCrudController(Testimonial);

router.get("/", controller.list);
router.get("/:id", controller.get);
router.post("/", protect, controller.create);
router.put("/:id", protect, controller.update);
router.delete("/:id", protect, controller.remove);

export default router;