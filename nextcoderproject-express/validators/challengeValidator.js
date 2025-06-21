import Joi from "joi";

const functionInputSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
});

const codeTextSchema = Joi.object({
  language: Joi.string().required(),
  text: Joi.string().required(),
});

const testInputSchema = Joi.object({
  name: Joi.string().required(),
  value: Joi.any().required(),
});

const testCaseSchema = Joi.object({
  weight: Joi.number().min(0).max(1).required(),
  inputs: Joi.array().items(testInputSchema).required(),
  output: Joi.any().required(),
});

const codeSchema = Joi.object({
  function_name: Joi.string().required(),
  code_text: Joi.array().items(codeTextSchema).required(),
  inputs: Joi.array().items(functionInputSchema).required(),
});

export const validateChallengeCreation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    level: Joi.string().valid("Easy", "Moderate", "Hard").required(),
    code: codeSchema.required(),
    tests: Joi.array().items(testCaseSchema).required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      error: "Validation failed",
      details: error.details.map((d) => d.message),
    });
  }

  next();
};
