import Joi from "joi";
import mongoose from "mongoose";

const objectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error("any.invalid");
  }
  return value;
};

export const validateSubmission = (req, res, next) => {
  const schema = Joi.object({
    challenge_id: Joi.string().custom(objectId).required(),
    coder_id: Joi.string().custom(objectId).required(),
    lang: Joi.string().valid("py", "js").required(),
    code: Joi.string().min(5).required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      error: "Validation failed",
      details: error.details.map((e) => e.message),
    });
  }
  next();
};
