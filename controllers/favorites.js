const Favorites = require('../models/Favorites') //pulling data from the flix model as the framework for the favorites page

module.exports = {
    getFlix: async (req, res) => { //getting the flix from the model using an async function
        console.log(req.user) //displaying the user in the console
        try {
            favoritesItems = await Favorites.find({
                userId: req.user.id,
                completed: true,
            });
            const flixFavorites = await Flix.countDocuments({ //awaiting userID and for completed (which is acting as FAVORITE to be true)
            userId: req.user.id,
            completed: true, //using the word completed to placehold FAVORITE
        });
        res.render("favorites.ejs", { //rendering the items to the view
            flix: flixFavorites,
            user: req.user,
        });
        }catch(err){ //catching an error
            console.log(err)
        }
    },

}