import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email?.toLowerCase() });

    if (!admin || !(await bcrypt.compare(password || "", admin.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
console.log(admin.email ,admin.password)
console.log(req.body.email,req.body.password)
    res.json({
      token: signToken(admin._id),
      admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role }
    });
  } catch (err) {
    next(err);
  }
}

export async function me(req, res) {
  res.json({ admin: req.admin });
}