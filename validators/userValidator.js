const { Joi, celebrate } = require('celebrate')

const announcementValidator = celebrate({
    body: Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
    })
})

const noticeValidator = celebrate({
    body: Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
    })
})


const emailValidator = celebrate({
    body: Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required(),
        subject:Joi.string().required(),
        message:Joi.string().required(),
    })
})
module.exports = { announcementValidator, noticeValidator, emailValidator}