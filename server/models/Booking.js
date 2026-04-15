import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    staff: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    treatments: [
      {
        treatment: { type: mongoose.Schema.Types.ObjectId, ref: "Treatment" },
        name: String,
        durationMin: Number,
        price: Number,
      },
    ],
    startsAt: { type: Date, required: true },
    endsAt: { type: Date, required: true },
    totalPrice: Number,
    totalDuration: Number,
    paymentMode: { type: String, enum: ["pay_full", "deposit", "pay_on_arrival"] },
    paidAmount: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled", "no_show"],
      default: "pending",
    },
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
