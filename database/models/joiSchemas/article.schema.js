const Joi = require('joi')

const articleSchema = Joi.object({

  title: Joi.string().required(),
  description: Joi.string().required(),
  data: Joi.string().required(),
  image: Joi.string(),
  userID: Joi.string()
})

module.exports = articleSchema
