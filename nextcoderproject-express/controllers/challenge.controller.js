import { error } from "console";
import Challenge from "../models/challenge.js";

export const createChallenge = async (req, res) => {
  try {
    const challenge = new Challenge(req.body);
    await challenge.save();
    res
      .status(201)
      .json({ message: "challenge created successfully", challenge });
  } catch (error) {
    console.error("Error creating challenge", error.message);
    res.status(500).json({ error: "Server error while creating challenge" });
  }
};

export const getChallengeById = async (req, res) => {
  try {
    const { id } = req.params;
    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({ error: "Challenge not found" });
    }

    res.status(200).json(challenge);
  } catch (err) {
    console.error("Error fetching challenge:", err.message);
    res.status(500).json({ error: "Server error while fetching challenge" });
  }
};

export const listCategories = async (req, res) => {
  try {
    const categories = await Challenge.distinct("category");
    res.status(200).json({ categories });
  } catch (err) {
    console.error("Error listing categories:", err.message);
    res.status(500).json({ error: "Server error while fetching categories" });
  }
};
