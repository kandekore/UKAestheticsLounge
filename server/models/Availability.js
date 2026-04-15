import mongoose from "mongoose";

// Recurring weekly working hours per staff member
const availabilitySchema = new mongoose.Schema(
  {
    staff: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    dayOfWeek: { type: Number, required: true }, // 0 = Sun .. 6 = Sat
    startTime: { type: String, required: true }, // "10:00"
    endTime: { type: String, required: true },   // "19:00"
    isOff: { type: Boolean, default: false },
  },
  { timestamps: true }
);

availabilitySchema.index({ staff: 1, dayOfWeek: 1 }, { unique: true });

export default mongoose.models.Availability || mongoose.model("Availability", availabilitySchema);
