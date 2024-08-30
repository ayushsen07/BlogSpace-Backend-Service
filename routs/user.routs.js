/**
 * GET : localhost://5000/api/users
 * POST  : localhost://5000/blog/api/signUp
 * 
 */

const userController= require("../controller/user.controller")


module.exports = (app)=>{
 // get all user
    app.get("/api/users" , userController.getAllUser)

    // signup the user 
    app.post("/blog/api/user/signUp" , userController.signUp)

    // login the user 
    app.post("/blog/api/user/signIn" , userController.signIn)
}