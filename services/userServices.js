const functions = require('../function')
const mongoose = require('mongoose')
const mongodb = require('mongodb');
const email = require('../models/email')
var nodemailer = require('nodemailer');
const validator = require('../validators/userValidator')
const jwt = require('jsonwebtoken');
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
                user: 'venus.bityotta@gmail.com',
                pass: 'venus@123'
            }
        });

        const mailOptions = {
            from: 'venus.bityotta@gmail.com',
            to: 'hemantvinchur96@gmail.com',
            subject: payLoad.subject,
            text: "Hi, " + "\n" + "Client name-: " + payLoad.name + '\n' + "Email-: " + payLoad.email + "\n" + "Message-:" + payLoad.message
        };

        let sendMail = await transporter.sendMail(mailOptions);

        return sendMail;

    } catch (error) {
        console.error(error)
        throw error;
    }
}

    module.exports = { userEmail, sendMail }
