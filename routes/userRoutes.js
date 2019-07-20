const router = require('express').Router();
const { Joi, celebrate } = require('celebrate')
const jwt = require('jsonwebtoken')
const functions = require('../function')
const register = require('../models/announcement')
const notice = require('../models/notice')
const validator = require('../validators/userValidator')
const services = require('../services/userServices')


console.log("userRoutes....................")
//Create announcement

router.post('/announcement', validator.announcementValidator,
    async (req, res) => {
        try {
            console.log("Announcement post API")
            let payLoad = req.body;
            let userData = await services.userAnnouncement(payLoad);
            return res.status(200).json({
                statusCode: 200,
                message: "Announcement successfully created!!!!",
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

//Create notice

router.post('/notice', validator.noticeValidator,
  async  (req, res) => {
        try {
            console.log("Notice post API")
            let payLoad = req.body;
            let userData = await services.userNotice(payLoad);
            return res.status(200).json({
                statusCode: 200,
                message: "Notice successfully created!!!!",
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



//Fetch announcement

router.get('/getAnnouncement',
async (req, res) => {
    try {
        console.log("Announcement get API")
        let userData = await services.getAnnouncement();
        return res.status(200).json({
            statusCode: 200,
            message: "Announcement successfully fetched!!!!",
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

//Fetch notice

router.get('/getNotice', 
async (req, res) => {
    try {
        console.log("Notice get API")
        let userData = await services.getNotice();
        return res.status(200).json({
            statusCode: 200,
            message: "Notice successfully fetched!!!!",
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

//Update announcement

router.put('/updateAnnouncement/:id',
async (req, res) => {
    try {
        console.log("Announcement update API")
        let payLoad = req.body;
        let params = req.params;
        let userData = await services.updateAnnouncement(payLoad,params);
        return res.status(200).json({
            statusCode: 200,
            message: "Announcement successfully updated!!!!",
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

//Update notice

router.put('/updateNotice/:id',
async (req, res) => {
    try {
        console.log("Notice update API")
        let payLoad = req.body;
        let params = req.params;
        let userData = await services.updateNotice(payLoad,params);
        return res.status(200).json({
            statusCode: 200,
            message: "Notice successfully updated!!!!",
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


//Delete announcement

router.delete('/deleteAnnouncement/:id',
async (req, res) => {
    try {
        console.log("Announcement delete API")
        let params = req.params;
        console.log(params)
        let userData = await services.deleteAnnouncement(params);
        return res.status(200).json({
            statusCode: 200,
            message: "Announcement successfully deleted!!!!",
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


//delete notice

router.delete('/deleteNotice/:id',
async (req, res) => {
    try {
        console.log("Notice delete API")
        let params = req.params;
        let userData = await services.deleteNotice(params);
        return res.status(200).json({
            statusCode: 200,
            message: "Notice successfully deleted!!!!",
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