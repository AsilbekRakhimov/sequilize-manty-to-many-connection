import Joi from "joi";

export const updateBranchSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string(),
});
