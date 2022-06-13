const mongoose = require("mongoose");

const ProductSchema= new mongoose.Schema({
    name:String,
	category:String,
	price:{
       typr:Number,
    //    required:true   
    },       //mandatory property
})

module.exports=mongoose.model("ProductDoc", ProductSchema )