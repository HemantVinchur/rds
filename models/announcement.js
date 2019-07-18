const mongoose = require('mongoose')
const Schema = mongoose.Schema

let announcementSchema = new Schema({
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('announcement', announcementSchema)