const searchDB = require('../models/search')


module.exports = {
    getMovie: async (req, res) => {
        let title = req.query.title
        console.log(title)
        try {
            const movie = await searchDB.find({ 'title': title })
            res.json(movie);
        } catch (err) {
            console.log(err)
        }
    }
}