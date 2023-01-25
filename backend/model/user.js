const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require ('validator')
const bcrypt = require('bcrypt');


const userSchema =  new Schema({
    username:{
        type:String,
        //custom error message
        required:[true,"Please enter username"],
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        lowercase:true,
        unique:true,
        validate: [isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter valid password"],
        minlength:[8,"please input a minlength of 8 characters"],
    }
})

//fire a function before a new user is saved to the DB...
userSchema.pre('save', async function(next){
    //Hash the users password ...
    const salt = await bcrypt.genSalt()
    //this refers to the user ...
    this.password = await bcrypt.hash(this.password,salt);
    // console.log('user about to be saved ', this)
    next();
})

//Fire a function after the user has been saved
userSchema.post('save',function(doc,next){
    console.log("New User was saved", doc);
    next();
})


module.exports = mongoose.model('User', userSchema)