import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema(
  {
    categorySlug: { type: String, required: true },
    categoryName: String,
    name: { type: String, required: true },
    description: String,
    durationMin: { type: Number, required: true },
    price: { type: Number, required: true },
    paymentMode: {
      type: String,
      enum: ["pay_full", "deposit", "pay_on_arrival"],
      default: "pay_on_arrival",
    },
    depositAmount: Number,
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Treatment || mongoose.model("Treatment", treatmentSchema);
