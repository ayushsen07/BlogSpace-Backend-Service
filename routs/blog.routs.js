
/**
 * blog APIs
 * 
 * GET localhost://5000/blog/api/blogs
 * POST localhost://5000/blog/api/addBlog
 * PUT localhost://5000/blog/api/updateBlog
 * 
 */

const blogController = require("../controller/blog.controller")

module.exports= (app)=>{
    // get all the blogs
    app.get("/blog/api/blogs" , blogController.getAllBlogs)

    // add a blog by the user
    app.post("/blog/api/addBlog" , blogController.addBlog)

    // update the blog by ID
    app.put("/blog/api/updateBlog/:id" , blogController.updateBlog)

    // get blog by ID
    app.get("/blog/api/getBlogById/:id" , blogController.getById)

    // delete a blog by ID
    app.get("/blog/api/deleteBlogById/:id" , blogController.deleteBlogById)
}