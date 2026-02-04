const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },

    caption: {
        type: String,
        required: true
    }
}, { timestamps: true });

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;