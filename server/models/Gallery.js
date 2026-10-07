import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  imageUrl: { type: String, required: true },
  category: { type: String, default: "School" },
  published: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Gallery", gallerySchema);