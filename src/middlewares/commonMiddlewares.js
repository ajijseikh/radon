
// 
const UserDocModel = require("../models/UserDocModel");
const ProductDocModel = require("../models/ProductDocModel");
// const OrderDocModel = require("../models/OrderDocModel");


const mid1 = function(req,res,next){

    if(req.header["isFreeAppUser"]===undefined){
        res.send("request is missing mandatory header field")
    }
    else  next()
    }
    
    const idCheck= async function(req,res,next){
    
        let data = req.body
        myUser_id = req.body["user_id"]
        myProduct_id = req.body["product_id"]
        // myProductId= await ProductModel.findOne({product_id:myProduct_id})
         myProductId= await ProductDocModel.findById(myProduct_id)
        myUserId= await UserDocModel.findById(myUser_id)
    if(myProductId&&myUserId){
        next()
    }
    else{
        res.send({error:"invalid userId or productId"})
    
    }
    }
    
    module.exports.mid1 = mid1
    module.exports.idCheck = idCheck


