import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  description: { type: String, required: true, trim: true },
  imageUrl: { type: String, default: "" },
  published: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);