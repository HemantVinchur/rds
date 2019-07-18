const mongoose = require('mongoose')
const Schema = mongoose.Schema

let announcementSchema = new Schema({
    announcement: String,
    date:Date,
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('announcement', announcementSchema)