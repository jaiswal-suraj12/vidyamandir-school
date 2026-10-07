import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true, trim: true },
  classApplying: { type: String, required: true, trim: true },
  parentName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true },
  message: { type: String, trim: true },
  status: { type: String, enum: ["new", "contacted", "completed"], default: "new" }
}, { timestamps: true });

export default mongoose.model("Admission", admissionSchema);