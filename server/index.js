import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import treatmentRoutes from "./routes/treatments.js";
import bookingRoutes from "./routes/bookings.js";
import availabilityRoutes from "./routes/availability.js";
import slotRoutes from "./routes/slots.js";
import settingsRoutes from "./routes/settings.js";
import staffRoutes from "./routes/staff.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:3000", credentials: true }));
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);
app.use("/api/treatments", treatmentRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/staff", staffRoutes);

const PORT = process.env.PORT || 5000;

async function start() {
  if (process.env.MONGO_URI) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("[mongo] connected");
    } catch (err) {
      console.error("[mongo] connection failed — running without DB", err.message);
    }
  } else {
    console.warn("[mongo] MONGO_URI not set — DB-backed routes will 503");
  }
  app.listen(PORT, () => console.log(`[server] listening on :${PORT}`));
}
start();
