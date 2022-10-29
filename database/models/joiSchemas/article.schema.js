const Joi = require('joi')

const articleSchema = Joi.object({

  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string(),
  userID: Joi.string(),
  createdBy: Joi.string()
})

module.exports = articleSchema
