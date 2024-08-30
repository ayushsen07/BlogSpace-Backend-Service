const user_model = require("../models/user.model")
const bcrypt = require("bcryptjs")

 exports.getAllUser = async (req,res,next) =>{
    let users;
    try{
       users = await user_model.find();
    }
    catch(err){
        console.log("error while geting all user",err)
    }
    if(!users){
        return res.status(404).json({message : " NO user found"});
    }
    return res.status(200).json({users})
 } 

  // sign up the user
 exports.signUp = async(req , res)=>{
    // logic to creat the user

    // 1. read the request body
    const req_body = req.body

    //2. insert the data in the user collection
    const userObj ={
        name : req_body.name,
        email : req_body.email,
        password : bcrypt.hashSync(req_body.password,8),
        blogs :[],
    }

    try{

    userCreated = await user_model.create(userObj)


    // after registering return the user
    const user_obj={
        name : userCreated.name,
        email: userCreated.email,
        password: userCreated.password,
        blogs : userCreated.blogs,
    }

    res.status(201).send(user_obj)
    console.log("user registration is succesfull");
    console.log(user_obj)   
    
  } 
  catch(err){
    console.log("some erorr while regitering" , err);
    res.status(403).send({
        message : "some error while registering the user"
        
    })
  }
}

exports.signIn = async(req,res)=>{
    // check the email is present or not
    const user = await user_model.findOne({email : req.body.email})

    if(user == null){
        return res.status(400).send({
            message : "passed email is not present "
        })
    }

    // check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password , user.password)
    if(!isPasswordCorrect){
        return res.status(401).send({
            message : "Password is invalid"
        })   
    }
    //all corrrect
    res.status(202).send({
       message : "Login succesfully"
    }) 
}
