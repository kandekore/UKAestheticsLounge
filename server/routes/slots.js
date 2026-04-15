import { Router } from "express";
import Availability from "../models/Availability.js";
import BlackoutDate from "../models/BlackoutDate.js";
import Booking from "../models/Booking.js";
import Settings from "../models/Settings.js";

const router = Router();

// GET /api/slots?staffId=...&date=YYYY-MM-DD&durationMin=60
// Returns an array of available start times for that staff member on that day.
router.get("/", async (req, res) => {
  const { staffId, date, durationMin } = req.query;
  if (!staffId || !date || !durationMin) return res.status(400).json({ error: "Missing params" });

  const dur = Number(durationMin);
  const settings = (await Settings.findOne({})) || { slotLengthMin: 30 };
  const day = new Date(date);
  const dow = day.getDay();

  const hours = await Availability.findOne({ staff: staffId, dayOfWeek: dow });
  if (!hours || hours.isOff) return res.json({ slots: [] });

  const blackout = await BlackoutDate.findOne({
    staff: staffId,
    date: { $gte: new Date(day.setHours(0, 0, 0, 0)), $lt: new Date(day.setHours(23, 59, 59, 999)) },
  });
  if (blackout) return res.json({ slots: [] });

  const existing = await Booking.find({
    staff: staffId,
    startsAt: { $gte: new Date(`${date}T00:00:00`), $lt: new Date(`${date}T23:59:59`) },
    status: { $in: ["pending", "confirmed"] },
  });

  const [sh, sm] = hours.startTime.split(":").map(Number);
  const [eh, em] = hours.endTime.split(":").map(Number);
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;
  const step = settings.slotLengthMin;

  const slots = [];
  for (let m = startMin; m + dur <= endMin; m += step) {
    const slotStart = new Date(`${date}T${pad(Math.floor(m / 60))}:${pad(m % 60)}:00`);
    const slotEnd = new Date(slotStart.getTime() + dur * 60000);
    const clash = existing.some((b) => slotStart < b.endsAt && slotEnd > b.startsAt);
    if (!clash) slots.push(`${pad(Math.floor(m / 60))}:${pad(m % 60)}`);
  }
  res.json({ slots });
});

function pad(n) { return String(n).padStart(2, "0"); }

export default router;
