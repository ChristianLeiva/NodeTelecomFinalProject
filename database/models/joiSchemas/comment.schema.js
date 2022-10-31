const Joi = require('joi')

const commentSchema = Joi.object({
  comment: Joi.string().required(),
})

module.exports = commentSchema
