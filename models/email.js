const mongoose = require('mongoose')
const Schema = mongoose.Schema

let emailSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('email', emailSchema)