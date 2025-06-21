import submission from "../models/submission.js";

export const createSubmission = async (res, req) => {
  try {
    const { challenge_id, lang, code } = req.body;

    const submission = new Submission({
      challenge_id,
      coder_id,
      lang,
      code,
      passed: false,
      score: 0,
    });

    await submission.save;

    res
      .status(201)
      .json({ message: "Submission received successfully", submission });
  } catch (error) {
    console.error("Error saving submission:", error.message);
    res.status(500).json({ error: "Server error while submitting code" });
  }
};
