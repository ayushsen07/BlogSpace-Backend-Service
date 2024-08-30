const blog_model = require("../models/blog.model")
const userModel = require("../models/user.model") 
const mongoose = require("mongoose")

// getting all blogs 
exports.getAllBlogs= async(req,res)=>{
    let blogs;
    try {
       blogs =  await blog_model.find()
    
    } catch (err) {
       return console.log("error while getting all blogs",err) 
    }
   if(!blogs){
       return res.status(400).json({message : "No blog found"})
    }
return res.status(200).json({blogs})
}

// create a new blog 

exports.addBlog = async (req , res)=>{
    // logic to create the blog

    //1- read the request body
    const {title, description , image , user} = req.body

     let existingUser;
     try {
        existingUser = await userModel.findById(user)
     } catch (err) {
        return console.log(err)
     }
     if(!existingUser){
        return res.status(500).send({
            message : "Uanalble to find user by this ID"
        })
     }


    // read the request body
 
    const blog_obj = new blog_model({
        title,
        description,
        image,
        user,
    })

    try {

       const session = await mongoose.startSession();
       session.startTransaction()
       await blog_obj.save({session});
       existingUser.blog_obj.push()
       await existingUser.save({session})
       await session.commitTransaction();
        // after creat the blog
        console.log( "Blog is succesfully added by the" );
        res.status(201).send({blog_obj})

    } catch (err) {
        console.log("Some error happen while the adding the blog",err);
        res.status(402).send({
            message : "error while adding the blog" , err
        })
        
        
    }
};


// Uopdate blog 
exports.updateBlog = async (req , res)=>{
    const { title,description} = req.body
    const blogId = req.params.id;
    let blog;
    try {
        blog = await blog_model.findByIdAndUpdate(blogId ,{
            title,
            description 
        })
        return res.status(200).send({blog})
    } catch (err) {
        console.log("unable to update",err);  
    }
    if(!blog){
       return res.status(500).send({
        message : "blog in not present by this ID"
       })
    }
         
}

//get blog by id
exports.getById = async (req , res)=>{
    const getId = req.params.id;
     try {
        const blog = await blog_model.findById(getId)
        console.log("Sucessfuly find the blog by ID")
        return res.status(201).send({blog})
        
     } catch (error) {
        console.log("can not find the blog by ID" , error);
        return res.status(404).send({
            message : "provide ID is not correct"
        })
        
     }
};

// delete blog by id
exports.deleteBlogById= async (req , res )=>{
    const id = req.params.id
    try {
        const blog = await blog_model.findByIdAndDelete(id)
        console.log("succesfully get the blog and deleted the blog")
        return res.status(200).send({
            message : "Blog is deleted succesfully"
        })
    } catch (err) {
        console.log("can not getting blog by this ID")
    }

    if(!blog){
        console.log("Blog is not present by this")
        return res.status(403).send({
            message : "Blog is not present by this ID "
        })
    }
}