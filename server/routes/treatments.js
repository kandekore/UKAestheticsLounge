import { Router } from "express";
import Treatment from "../models/Treatment.js";
import { authRequired, requireRole } from "../middleware/auth.js";

const router = Router();

router.get("/", async (_req, res) => {
  const items = await Treatment.find({ active: true }).sort({ categorySlug: 1, name: 1 });
  res.json(items);
});

router.post("/", authRequired, requireRole("admin"), async (req, res) => {
  const t = await Treatment.create(req.body);
  res.status(201).json(t);
});

router.put("/:id", authRequired, requireRole("admin"), async (req, res) => {
  const t = await Treatment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(t);
});

router.delete("/:id", authRequired, requireRole("admin"), async (req, res) => {
  await Treatment.findByIdAndUpdate(req.params.id, { active: false });
  res.json({ ok: true });
});

export default router;
