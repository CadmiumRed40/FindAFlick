const mongoose = require('mongoose')

const FavoritesSchema = new mongoose.Schema({
    favorites: {
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

module.exports = mongoose.model("Favorites", FavoritesSchema);
