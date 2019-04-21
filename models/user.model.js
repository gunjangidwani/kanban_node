const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('user', UserSchema)