import Joi from "joi";

export const createShopSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string(),
});
