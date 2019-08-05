const { Joi, celebrate } = require('celebrate')
const emailValidator = celebrate({
    body: Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        subject:Joi.string().required(),
        message:Joi.string().required(),
    })
})
module.exports = {emailValidator}