import joi from 'joi'
import JoiDateFactory from '@joi/date';

const Joi = joi.extend(JoiDateFactory)
export const entrySchema = Joi.object({
  value: Joi.number().positive().precision(2).required(),
  description: Joi.string().required(),
  entryType:Joi.string().valid('income','expense'),
  date:Joi.date().format("DD/MM/YYY")
});