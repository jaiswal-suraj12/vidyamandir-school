import Admission from "../models/Admission.js";
import Contact from "../models/Contact.js";

export async function createAdmission(req, res, next) {
  try {
    const admission = await Admission.create(req.body);
    res.status(201).json({ message: "Admission enquiry submitted successfully", admission });
  } catch (err) { next(err); }
}

export async function listAdmissions(req, res, next) {
  try { res.json(await Admission.find().sort({ createdAt: -1 })); }
  catch (err) { next(err); }
}

export async function updateAdmission(req, res, next) {
  try {
    const item = await Admission.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: "Admission not found" });
    res.json(item);
  } catch (err) { next(err); }
}

export async function createContact(req, res, next) {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ message: "Your message has been sent successfully", contact });
  } catch (err) { next(err); }
}

export async function listContacts(req, res, next) {
  try { res.json(await Contact.find().sort({ createdAt: -1 })); }
  catch (err) { next(err); }
}

export async function updateContact(req, res, next) {
  try {
    const item = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: "Contact enquiry not found" });
    res.json(item);
  } catch (err) { next(err); }
}