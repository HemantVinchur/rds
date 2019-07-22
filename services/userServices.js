const functions = require('../function')
const mongoose = require('mongoose')
const mongodb = require('mongodb');
const announcement = require('../models/announcement')
const email = require('../models/email')
const notice = require('../models/notice')
var nodemailer = require('nodemailer');
const validator = require('../validators/userValidator')
const jwt = require('jsonwebtoken');

//Create announcement

const userAnnouncement = async (payLoad) => {
    console.log("Create announcement")
    try {
        console.log("userAnnouncement")
        console.log(payLoad)
        let userData = await announcement.create(payLoad);
        return userData
    } catch (error) {
        console.error(error)
        throw error;
    }
}

//Create notice

const userNotice = async (payLoad) => {
    console.log("Create notice")
    try {
        console.log("userNotice")
        console.log(payLoad)
        let userData = await notice.create(payLoad);
        return userData
    } catch (error) {
        console.error(error)
        throw error;
    }
}


//Create email

const userEmail = async (payLoad) => {
    console.log("Create email")
    try {
        console.log("userEmail")
        console.log(payLoad)
        let userData = await email.create(payLoad);
        return userData
    } catch (error) {
        console.error(error)
        throw error;
    }
}


//Send email
const sendMail = async (payLoad) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'gattoo1997@gmail.com',
                pass: 'Gattoo@123'
            }
        });

        const mailOptions = {
            from: 'gattoo1997@gmail.com',
            to: payLoad.email,
            subject: payLoad.subject,
            text: payLoad.message
        };

        let sendMail = await transporter.sendMail(mailOptions);

        return sendMail;

    } catch (error) {
        console.error(error)
        throw error;
    }
}
//Get announcement

const getAnnouncement = async () => {
    console.log("Get announcement")
    try {
        console.log("getAnnouncement")
        let userData = await announcement.find();
        return userData;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

//Get notice

const getNotice = async () => {
    console.log("Get notice")
    try {
        console.log("getNotice")
        let userData = await notice.find();
        return userData;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

//Update announcement

const updateAnnouncement = async (payLoad, params) => {
    console.log("Update announcement")
    try {
        console.log("updateAnnouncement")
        announcement.findOne({ id: params.id }, async (err, data) => {

            console.log('111000')
            let userData = await announcement.updateOne({
                _id: mongodb.ObjectID(params.id)
            },
                {
                    title: payLoad.title,
                    description: payLoad.description,
                });
            return userData;
        })
    } catch (error) {
        console.error(error)
        throw error

    }

}

//Update notice

const updateNotice = async (payLoad, params) => {
    console.log("Update notice")
    try {
        console.log("updateNotice")
        notice.findOne({ id: params.id }, async (err, data) => {

            console.log('111000')
            let userData = await notice.updateOne({
                _id: mongodb.ObjectID(params.id)
            },
                {
                    title: payLoad.title,
                    description: payLoad.description,
                });
            return userData;
        })
    } catch (error) {
        console.error(error)
        throw error

    }

}

//Delete announcement

const deleteAnnouncement = async (params) => {
    console.log("Delete announcement")
    try {
        console.log("deleteAnnouncement")
        let userData = await announcement.deleteOne({ _id: mongodb.ObjectID(params.id) });
        return userData;
    } catch (error) {
        console.error(error)
        throw error
    }
}

//Delete notice

const deleteNotice = async (params) => {
    console.log("Delete notice")
    try {
        console.log("deleteNotice")
        let userData = await notice.deleteOne({ _id: mongodb.ObjectID(params.id) });
        return userData;
    } catch (error) {
        console.error(error)
        throw error
    }
}
module.exports = { userAnnouncement, userNotice, userEmail, sendMail, getAnnouncement, getNotice, updateAnnouncement, updateNotice, deleteAnnouncement, deleteNotice }