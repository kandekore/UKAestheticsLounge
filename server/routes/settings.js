import { Router } from "express";
import Settings from "../models/Settings.js";
import { authRequired, requireRole } from "../middleware/auth.js";

const router = Router();

// Public: just the fields the frontend needs
router.get("/public", async (_req, res) => {
  const s = (await Settings.findOne({})) || {};
  res.json({
    whatsappNumber: s.whatsappNumber || "447000000000",
    whatsappMessage: s.whatsappMessage || "Hi, I'd like to ask about a treatment at U.K Aesthetics Lounge.",
  });
});

router.get("/", authRequired, requireRole("admin"), async (_req, res) => {
  const s = (await Settings.findOne({})) || {};
  res.json(s);
});

router.put("/", authRequired, requireRole("admin"), async (req, res) => {
  const s = await Settings.findOneAndUpdate({}, req.body, { upsert: true, new: true });
  res.json(s);
});

export default router;
