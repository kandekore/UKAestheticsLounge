import { Router } from "express";
import User from "../models/User.js";
import { authRequired, requireRole } from "../middleware/auth.js";

const router = Router();

router.get("/", async (_req, res) => {
  const staff = await User.find({ role: "staff" }).select("name title bio specialties avatarUrl");
  res.json(staff);
});

router.post("/", authRequired, requireRole("admin"), async (req, res) => {
  const user = await User.create({ ...req.body, role: "staff" });
  res.status(201).json(user);
});

router.put("/:id", authRequired, requireRole("admin"), async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

export default router;
