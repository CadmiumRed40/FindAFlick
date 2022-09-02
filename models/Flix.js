const mongoose = require('mongoose')

const FlixSchema = new mongoose.Schema({
    flix: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Flix", FlixSchema);
