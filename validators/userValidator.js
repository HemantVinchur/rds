const { Joi, celebrate } = require('celebrate')

const announcementValidator = celebrate({
    body: Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
        // image:Joi.image().optional()
    })
})

const noticeValidator = celebrate({
    body: Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
    })
})
module.exports = { announcementValidator, noticeValidator }