const express = require("express")
const mongoose = require('mongoose')


const app =express()

app.use(express.json())

mongoose.connect("mongodb://localhost/userBlog_Data")

const db = mongoose.connection
db.on("error" , ()=>{
    console.log("error while connecting")
})
db.once("open",()=>{
    console.log("conneced to mongoDB")
})


//stich the login signup routs to the srver 
require("./routs/user.routs")(app)


// stich the blogs routs to the server
require("./routs/blog.routs")(app)





app.listen(5000,()=>{
    console.log("server is started")
})