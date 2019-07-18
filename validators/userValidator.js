const { Joi, celebrate } = require('celebrate')

const announcementValidator = celebrate({
    body: Joi.object().keys({
        announcement:Joi.string().required(),
        date:Joi.date()
    })
})

const noticeValidator = celebrate({
    body: Joi.object().keys({
        notice:Joi.string().required(),
        date:Joi.date()
    })
})
module.exports = { announcementValidator, noticeValidator }