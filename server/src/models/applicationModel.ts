import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Applied", "To Apply", "Interview", "Accepted", "Rejected"],
    default: "Applied",
  },
  appliedDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  platform: {
    type: String,
  },
  notes: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application