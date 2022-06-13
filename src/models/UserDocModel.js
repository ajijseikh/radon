const mongoose = require("mongoose");

const UserDocumentSchema= new mongoose.Schema({
    name: String,
	balance:{
        type:Number,
        required:true,
        default:100
    }, // Default balance at user registration is 100
	address:String,
	age:Number,
 	gender:{
        type:String,
        enum:["Male", "Female", "Other"]
    },
	isFreeAppUser: {
        type:Boolean,
        default:false   
    
          

    },  timestamps:true})

    module.exports=mongoose.model("UserDoc", UserDocumentSchema)