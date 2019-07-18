const functions = require('../function')
const mongoose = require('mongoose')
const mongodb = require('mongodb');
const announcement = require('../models/announcement')
const notice = require('../models/notice')
const validator = require('../validators/userValidator')
const jwt = require('jsonwebtoken');

//Registration

const userAnnouncement = async (payLoad) => {
    console.log("userRegister")
    try {
        console.log("userRegister")
        console.log(payLoad)
        let userData = await announcement.create(payLoad);
        return userData
    } catch (error) {
        console.error(error)
        throw error;
    }
}

//Login

const userNotice = async (req, res) => {
    console.log("Login.................")
    try {
        let payLoad = req.body;
        console.log(payLoad)
        let userData = await notice.create(payLoad);
        return res.status(200).json({
            statusCode: 200,
            message: "Success",
            data: userData
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            statusCode: 400,
            message: "Something went wrong",
            data: {}
        })
    }
}

const getAnnouncement = async (req, res) => {
    try {
        let userData = await announcement.find({}, (error, user) => {
            if (error) return next(error)
            res.send(user)
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            statusCode: 400,
            message: "Something went wrong",
            data: {}
        })
    }
}

const getNotice = async (req, res) => {
    try {
        let userData = await notice.find({}, (error, user) => {
            if (error) return next(error)
            res.send(user)
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            statusCode: 400,
            message: "Something went wrong",
            data: {}
        })
    }
}


const updateAnnouncement = async (req, res) => {

    try {
        announcement.findOne({ id: req.params.id }, (err, data) => {

            console.log('111000')
            announcement.updateOne({
                _id: mongodb.ObjectID(req.params.id)
            },
                {
                    title: req.body.title,
                    description: req.body.description,
                },

                (error, data) => {
                    if (error) {
                        res.status(200).json({
                            statusCode: 400,
                            message: "user not found",


                        })
                    }
                    return res.status(200).json({
                        statusCode: 200,
                        message: "sucess",
                        data: data
                    })
                })
        })
    } catch (err) {
        console.error(err)
        res.status(200).json({
            statusCode: 400,
            message: "somthing is going wrong"
        })

    }

}


const updateNotice = async (req, res) => {

    try {
        notice.findOne({ id: req.params.id }, (err, data) => {

            console.log('111000')
            notice.updateOne({
                _id: mongodb.ObjectID(req.params.id)
            },
                {
                    title: req.body.title,
                    description: req.body.description,
                },

                (error, data) => {
                    if (error) {
                        res.status(200).json({
                            statusCode: 400,
                            message: "user not found",


                        })
                    }
                    return res.status(200).json({
                        statusCode: 200,
                        message: "sucess",
                        data: data
                    })
                })
        })
    } catch (err) {
        console.error(err)
        res.status(200).json({
            statusCode: 400,
            message: "somthing is going wrong"
        })

    }

}


const deleteAnnouncement = async (req, res, next) => {
    let userData = await announcement.deleteOne({ _id: mongodb.ObjectID(req.params.id) }, (error, results) => {
        if (error) return next(error)
        res.send(results)
        console.log(results  )
    })
}


const deleteNotice = async (req, res, next) => {
    let userData = await notice.deleteOne({ _id: mongodb.ObjectID(req.params.id) }, (error, results) => {
        if (error) return next(error)
        res.send(results)
        console.log(results  )
    })
}
module.exports = { userAnnouncement, userNotice, getAnnouncement, getNotice, updateAnnouncement, updateNotice, deleteAnnouncement, deleteNotice }