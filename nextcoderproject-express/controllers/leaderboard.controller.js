import User from "../models/user.js";

export const getLeaderboard = async (req, res) => {
  try {
    const coders = await User.find({ role: "coder" })
      .select("firstName lastName email score avatar")
      .sort({ score: -1 });

    res.status(200).json({ coders });
  } catch (err) {
    console.error("Error fetching leaderboard:", err.message);
    res.status(500).json({ error: "Server error while fetching leaderboard" });
  }
};

export const getTopCoders = async (req, res) => {
  const k = parseInt(req.query.k);

  if (isNaN(k) || k <= 0) {
    return res
      .status(400)
      .json({ error: "Invalid 'k' value. Must be a positive number." });
  }

  try {
    const topCoders = await User.find({ role: "coder" })
      .select("firstName lastName email score avatar")
      .sort({ score: -1 })
      .limit(k);

    res.status(200).json({ coders: topCoders });
  } catch (err) {
    console.error("Error fetching top coders:", err.message);
    res.status(500).json({ error: "Server error while fetching top coders" });
  }
};
