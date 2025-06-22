import mongoose from "mongoose";

export const getSolvedStats = async (req, res) => {
  const { coder_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(coder_id)) {
    return res.status(400).json({ error: "Invalid coder ID" });
  }

  try {
    const stats = await Submission.find({
      coder_id,
      passed: true,
    }).populate("challenge_id");
  } catch (err) {
    console.error("Error fetching solved stats:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
