const mongoose = require('mongoose')
const Schema = mongoose.Schema

let noticeSchema = new Schema({
    notice: String,
    date:Date,
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('notice', noticeSchema)