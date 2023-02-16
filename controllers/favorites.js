const Favorites = require('..models/flix')

module.exports = {
    getFlix: async (req, res) => {
        console.log(req.user)
        try {
            const flixFavorites = await Flix.find({
                userId:req.user.id,
            completes: true,
        });
        res.render("favorites.ejs", {
            flix: flixFavorites,
            user: req.user,
        });
        }catch(err){
            console.log(err)
        }
    },

}