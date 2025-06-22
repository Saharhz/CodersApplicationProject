import jwt from "jsonwebtoken";
import User from "../models/user.js";

// export const verifyEmail = async (req, res) => {
//   const { token } = req.query;

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id);

//     console.log("Decoded token:", decoded);

//     if (!user) return res.status(404).json({ error: "User not found" });

//     user.isVerified = true;
//     await user.save();

//     res.status(200).json({ message: "Email verified successfully" });
//   } catch (err) {
//     res.status(400).json({ error: "Invalid or expired token" });
//   }
// };

export const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    console.log("🔐 Received token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Decoded token:", decoded);

    const user = await User.findById(decoded.id);
    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ error: "User not found" });
    }

    user.isVerified = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    console.error("❌ Error in verifyEmail:", err); // log full error object
    res.status(500).json({ error: "Server error" });
  }
};
