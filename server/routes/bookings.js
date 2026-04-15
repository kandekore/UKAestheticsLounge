import { Router } from "express";
import Booking from "../models/Booking.js";
import Treatment from "../models/Treatment.js";
import { authRequired, requireRole } from "../middleware/auth.js";

const router = Router();

// Client creates a booking
router.post("/", authRequired, async (req, res) => {
  const { staffId, treatmentIds, startsAt, notes, paymentMode } = req.body;
  const treatments = await Treatment.find({ _id: { $in: treatmentIds } });
  if (!treatments.length) return res.status(400).json({ error: "No treatments" });

  const totalDuration = treatments.reduce((s, t) => s + t.durationMin, 0);
  const totalPrice = treatments.reduce((s, t) => s + t.price, 0);
  const start = new Date(startsAt);
  const end = new Date(start.getTime() + totalDuration * 60000);

  const booking = await Booking.create({
    client: req.user.sub,
    staff: staffId,
    treatments: treatments.map((t) => ({ treatment: t._id, name: t.name, durationMin: t.durationMin, price: t.price })),
    startsAt: start,
    endsAt: end,
    totalDuration,
    totalPrice,
    paymentMode,
    status: "pending",
    notes,
  });
  res.status(201).json(booking);
});

router.get("/mine", authRequired, async (req, res) => {
  const bookings = await Booking.find({ client: req.user.sub }).sort({ startsAt: -1 });
  res.json(bookings);
});

router.get("/staff/:staffId", authRequired, requireRole("staff", "admin"), async (req, res) => {
  const bookings = await Booking.find({ staff: req.params.staffId }).sort({ startsAt: 1 });
  res.json(bookings);
});

router.get("/", authRequired, requireRole("admin"), async (_req, res) => {
  const bookings = await Booking.find().sort({ startsAt: -1 }).populate("client staff", "name email");
  res.json(bookings);
});

router.patch("/:id/status", authRequired, requireRole("staff", "admin"), async (req, res) => {
  const b = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(b);
});

export default router;
