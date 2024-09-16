import Joi from "joi";

export const updateShopSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string(),
});
