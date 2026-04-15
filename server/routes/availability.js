import { Router } from "express";
import Availability from "../models/Availability.js";
import BlackoutDate from "../models/BlackoutDate.js";
import { authRequired, requireRole } from "../middleware/auth.js";

const router = Router();

router.get("/:staffId", async (req, res) => {
  const hours = await Availability.find({ staff: req.params.staffId });
  const blackouts = await BlackoutDate.find({ staff: req.params.staffId });
  res.json({ hours, blackouts });
});

router.put("/:staffId", authRequired, requireRole("staff", "admin"), async (req, res) => {
  const { hours } = req.body; // [{ dayOfWeek, startTime, endTime, isOff }]
  for (const h of hours) {
    await Availability.findOneAndUpdate(
      { staff: req.params.staffId, dayOfWeek: h.dayOfWeek },
      { ...h, staff: req.params.staffId },
      { upsert: true }
    );
  }
  res.json({ ok: true });
});

router.post("/:staffId/blackout", authRequired, requireRole("staff", "admin"), async (req, res) => {
  const b = await BlackoutDate.create({ staff: req.params.staffId, ...req.body });
  res.status(201).json(b);
});

router.delete("/blackout/:id", authRequired, requireRole("staff", "admin"), async (req, res) => {
  await BlackoutDate.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;
