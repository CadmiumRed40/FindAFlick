const searchDB = require('../models/search')


module.exports = {
    getMovie: async (req, res) => {
        let title = req.query.title
        try {
            // Look for exact match
            let pattern = RegExp('^' + title + '$')
            let movie = await searchDB.find({ 'title': {$regex: pattern, $options: 'i'} })
            // If no exact match, match the first movie that contains req.query.title
            if (movie.length === 0) {
                movie = await searchDB.find({ 'title': {$regex: title, $options: 'i'} })
            }
            res.json(movie);
        } catch (err) {
            console.log(err)
        }
    }
}