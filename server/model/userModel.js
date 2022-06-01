const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    bio: {
        type: String,
    },
    contact: {
        type: String,
    },
    avatar: {
        type: String
    },
    avatarID: {
        type: String
    },
    isVerify: {
        type: Boolean,
    },
    verifiedToken: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userModel);