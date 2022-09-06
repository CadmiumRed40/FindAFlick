const mongoose = require('mongoose')

const searchSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("movies", searchSchema);
