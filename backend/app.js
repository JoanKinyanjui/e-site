const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const MONGO_URI = "mongodb+srv://e-site:e-sitepassword@e-site.nnw3rgn.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose');
const User = require ('./model/user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json())
app.use(cookieParser())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


//Database connection ...
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI)
  .then((result) => 
   app.listen(3000,()=>{console.log('Db connection successful and server running on port 3000...')})
  )
  .catch((err) => console.log(err));

//Handle errors ...
const handleErrors=(err)=>{
    let errors={};
    //return custom errors for validation
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach((err)=>{
              errors[err.properties.path] = err.message

        })
        console.log(errors)
}
    // duplicate errors
if(err.code  === 11000){
    errors['email']="that email is already registered"
   }
    return errors;
}

// //Sign Up
app.post('/signup', async (req,res)=>{
  const {username,email,password}= req.body;
  try{
      const user = await User.create({username,email,password});
      //status 201 == success
     return  res.status(201).json({user})
  }
  catch(err){
      const errors = handleErrors(err);
      // status 400 == bad client request ...
     return  res.status(400).json({errors})
    
  }
})
