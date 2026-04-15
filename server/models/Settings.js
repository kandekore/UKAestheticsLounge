import mongoose from "mongoose";

// Singleton settings doc — use findOneAndUpdate({}, ..., { upsert: true, new: true })
const settingsSchema = new mongoose.Schema(
  {
    whatsappNumber: { type: String, default: "447000000000" },
    whatsappMessage: { type: String, default: "Hi, I'd like to ask about a treatment at U.K Aesthetics Lounge." },
    slotLengthMin: { type: Number, default: 30 },
    minNoticeHours: { type: Number, default: 2 },
    cancellationWindowHours: { type: Number, default: 24 },
    stripeSecretKey: String,
    defaultPaymentRule: {
      type: String,
      enum: ["per_treatment", "pay_full", "deposit", "pay_on_arrival"],
      default: "per_treatment",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Settings || mongoose.model("Settings", settingsSchema);
