import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendVerificationEmail from "../utils/email.js";
import dotenv from "dotenv";
dotenv.config();

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
  role,
}) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role,
    isVerified: false,
  });

  await newUser.save();

  const token = jwt.sign(
    { id: newUser._id, role: newUser.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  await sendVerificationEmail(newUser.email, token);

  return newUser;
};
