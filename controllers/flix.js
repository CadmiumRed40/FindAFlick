const Flix = require('../models/Flix')

module.exports = {
    getFlix: async (req,res)=>{
        console.log(req.user)
        try{
            const flixItems = await Flix.find({userId:req.user.id})
            const flixLeft = await Flix.countDocuments({
                userId: req.user.id,
                completed: false,
            });
            res.render("flix.ejs", {
                flix: flixItems,
                left: flixLeft,
                user: req.user,
            });
        }catch(err){
            console.log(err)
        }
    },
    createFlix: async (req, res)=>{
        try{
            await Flix.create({
                flix: req.body.flixItem,
                completed: false,
                userId: req.user.id,
            });
            console.log('Movie/Tv Show has been added!')
            res.redirect("/flix");
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Flix.findOneAndUpdate(
                { _id: req.body.flixIdFromJSFile },
                {
                    completed: true,
                }
            );
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Flix.findOneAndUpdate(
                { _id: req.body.flixIdFromJSFile },
                {
                    completed: false,
                }
            );
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteFlix: async (req, res)=>{
        console.log(req.body.flixIdFromJSFile);
        try{
            await Flix.findOneAndDelete({ _id: req.body.flixIdFromJSFile });
            console.log("Deleted flix");
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    