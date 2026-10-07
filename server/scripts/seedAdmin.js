import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { connectDB } from "../config/db.js";
import Admin from "../models/Admin.js";

dotenv.config();

const email = process.env.ADMIN_EMAIL || "admin@vidhyamandirbajitpur.edu.in";
const password = process.env.ADMIN_PASSWORD ||"Admin_baalvidhya25@12Mandir! ";

await connectDB();

const exists = await Admin.findOne({ email });
if (exists) {
  console.log(`Admin already exists: ${email}`);
  process.exit(0);
}

const hashed = await bcrypt.hash(password, 12);
await Admin.create({
  name: "School Administrator",
  email,
  password: hashed
});

console.log(`Admin created: ${email}`);
console.log(`Password: ${password}`);
console.log("Change the password before production deployment.");
process.exit(0);