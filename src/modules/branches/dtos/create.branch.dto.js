import Joi from "joi";

export const createBranchSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string(),
});
