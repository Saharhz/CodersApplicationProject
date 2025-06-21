import Submission from "../models/submission.js";
import Challenge from "../models/challenge.js";
import mongoose from "mongoose";

export const getSolvedStats = async (req, res) => {
  const coderId = req.params.coderId;

  try {
    const results = await Submission.aggregate([
      {
        $match: {
          coder_id: new mongoose.Types.ObjectId(coderId),
          passed: true,
        },
      },
      {
        $lookup: {
          from: "challenges",
          localField: "challenge_id",
          foreignField: "_id",
          as: "challenge",
        },
      },
      { $unwind: "$challenge" },
      {
        $group: {
          _id: "$challenge.level",
          count: { $sum: 1 },
        },
      },
    ]);

    const formatted = {
      Easy: 0,
      Moderate: 0,
      Hard: 0,
    };

    results.forEach(({ _id, count }) => {
      formatted[_id] = count;
    });

    res.status(200).json(formatted);
  } catch (err) {
    console.error("Error fetching solved stats:", err.message);
    res.status(500).json({ error: "Server error while fetching statistics" });
  }
};
