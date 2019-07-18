const router = require('express').Router();
const { Joi, celebrate } = require('celebrate')
const jwt = require('jsonwebtoken')
const functions = require('../function')
const register = require('../models/announcement')
const notice = require('../models/notice')
const validator = require('../validators/userValidator')
const services = require('../services/userServices')

 
console.log("userRoutes....................")
//Registration

router.post('/announcement', validator.announcementValidator,
async(req, res) => {
    try{
        console.log("Register.......")
     let payLoad=req.body;
    let userData=await services.userAnnouncement(payLoad);
    return res.status(200).json({
        statusCode:200,
        message:"sucess",
        data:userData
    })

    }catch(error){
        res.status(200).json({
            statusCode:400,
            message:"somthing went wrong",
            data:{}
        })
    

    }
     
   
})

//Login

router.post('/notice', validator.noticeValidator, (req, res) => {
    services.userNotice(req, res);
})



//Login

router.get('/getAnnouncement',(req, res) => {
    services.getAnnouncement(req, res);
})

//Login

router.get('/getNotice',(req, res) => {
    services.getNotice(req, res);
})

//Login

router.put('/updateAnnouncement/:id',(req, res) => {
    services.updateAnnouncement(req, res);
})

//Login

router.put('/updateNotice/:id',(req, res) => {
    services.updateNotice(req, res);
})


//Login

router.delete('/deleteAnnouncement/:id',(req, res, next) => {
    services.deleteAnnouncement(req, res, next);
})


//Login

router.delete('/deleteNotice/:id',(req, res, next) => {
    services.deleteNotice(req, res, next);
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