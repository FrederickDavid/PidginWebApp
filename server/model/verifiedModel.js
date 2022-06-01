const mongoose = require('mongoose');

const verifiedModel = mongoose.Schema({
    name: {
        type: String,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

module.exports = mongoose.model('verifieds', verifiedModel);