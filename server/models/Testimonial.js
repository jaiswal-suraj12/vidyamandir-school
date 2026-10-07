import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  parentName: { type: String, required: true, trim: true },
  studentClass: { type: String, trim: true },
  message: { type: String, required: true, trim: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  photoUrl: { type: String, default: "" },
  published: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Testimonial", testimonialSchema);