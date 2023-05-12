const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        requires: true
    },
    password: {
        type: String,
        requires: true
    },
    resetToken: String,
    resetTokenExpiration: Date, 
})

module.exports = mongoose.model('User', userSchema)