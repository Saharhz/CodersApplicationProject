import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  challenge_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Challenge",
    required: true,
  },
  coder_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lang: {
    type: String,
    enum: ["py", "js"],
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  submissionTime: {
    type: Date,
    default: Date.now,
  },
  passed: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    default: 0,
  },
});

const Submission = mongoose.model("Submission", submissionSchema);
export default Submission;
