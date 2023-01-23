import joi from 'joi'

export const entrySchema = joi.object({
  value: joi.number().positive().precision(2).required(),
  description: joi.string().required()
}).prefs({convert: false});


