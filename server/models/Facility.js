import mongoose from "mongoose";

const facilitySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  icon: { type: String, default: "building" },
  imageUrl: { type: String, default: "" },
  published: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Facility", facilitySchema);