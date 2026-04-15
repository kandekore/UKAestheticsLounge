import mongoose from "mongoose";

const blackoutSchema = new mongoose.Schema(
  {
    staff: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    reason: String,
  },
  { timestamps: true }
);

export default mongoose.models.BlackoutDate || mongoose.model("BlackoutDate", blackoutSchema);
