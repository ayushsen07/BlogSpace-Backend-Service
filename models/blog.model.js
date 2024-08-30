const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title :{
        type : String,
        requie : true,
    },
    description :{
        type : String,
        require : true,

    },
    image :{
        type : String,
        require : true,
    },
    user :{
        type : mongoose.Types.ObjectId,
        ref : "User",
        require : true,
    }
})

module.exports = mongoose.model('Blogs', blogSchema)