import bcrypt from "bcrypt";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

export const registerCoder = async (req, res) => {
  try {
    const { first_name, last_name, email, password, role, description } =
      req.body;

    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role,
      description,
    });

    await newUser.save();

    res.status(201).json({ message: "Coder registered", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const registerManager = async (req, res) => {
  try {
    const { first_name, last_name, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "Manager registered", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const loginCoder = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, role: "coder" });
    if (!user) {
      return res.status(404).json({ error: "Coder not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Coder login successful", user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const loginManager = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, role: "manager" });
    if (!user) {
      return res.status(404).json({ error: "Manager not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Manager login successful", user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const { role, id } = req.params;

    const user = await User.findOne({ _id: id, role });
    if (!user) {
      return res.status(404).json({ error: `${role} not found` });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { role, id } = req.params;
    const { first_name, last_name, description } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: id, role },
      { first_name, last_name, ...(role === "coder" && { description }) },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: `${role} not found` });
    }

    res.status(200).json({ message: "Profile updated", user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
