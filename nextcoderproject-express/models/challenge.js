import mongoose from "mongoose";

const functionInputSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
  },
  { _id: false }
);

const codeTextSchema = new mongoose.Schema(
  {
    language: { type: String, required: true },
    text: { type: String, required: true },
  },
  { _id: false }
);

const testInputSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { _id: false }
);

const testCaseSchema = new mongoose.Schema(
  {
    weight: { type: Number, required: true, min: 0, max: 1 },
    inputs: [testInputSchema],
    output: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { _id: false }
);

const codeSchema = new mongoose.Schema(
  {
    function_name: { type: String, required: true },
    code_text: [codeTextSchema],
    inputs: [functionInputSchema],
  },
  { _id: false }
);

const challengeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    level: { type: String, enum: ["Easy", "Moderate", "Hard"], required: true },
    code: { type: codeSchema, required: true },
    tests: [testCaseSchema],
  },
  { timestamps: true }
);

const Challenge = mongoose.model("Challenge", challengeSchema);
export default Challenge;
