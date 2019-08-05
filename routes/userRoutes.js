const router = require('express').Router();
const { Joi, celebrate } = require('celebrate')
const jwt = require('jsonwebtoken')
const functions = require('../function')
var nodemailer = require('nodemailer');
const validator = require('../validators/userValidator')
const services = require('../services/userServices')
//Send email

router.post('/send', validator.emailValidator,
    async (req, res) => {
        try {
            let payLoad = req.body;
            let userData = await services.sendMail(payLoad);
            return res.status(200).json({
                statusCode: 200,
                message: "Mail successfully send!!!!",
                data: userData
            })

        } catch (error) {
            res.status(200).json({
                statusCode: 400,
                message: "Somthing went wrong.",
                data: {}
            })
        }
    })

//Token
router.get('/', (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 's3cr3t', (err, decoded) => {
        if (err) {
            console.log(err)
            throw err;
        }
        console.log(decoded)
    });
    return res.json({
        statusCode: 200,
        message: "Hello",
        data: token
    })
})
//get data

router.get('/get', (req, res) => {
    services.userGet(req, res);
})

module.exports = router;