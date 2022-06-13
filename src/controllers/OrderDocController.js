const OrderDocModel = require("../models/OrderDocModel");

const createOrder = async function (req,res){
    let isFreeAppUser = req.header.isFreeAppUser
    if(isFreeAppUser===true){
     req.body.isFreeAppUser = true;
     req.body.amount = 0
 
    }
    else if(isFreeAppUser===false){
     productId = req.body.product_id
     userId= req.body.user_id
     productPrice = await OrderDocModel .findbyId(productId).select({price:1, _id:0})
     amount = await UserModel.findById(userId).select({amount:1, _id:0})
     if(productPrice<amount){
         req.body.amount = amount - productPrice;
         req.body.isFreeAppUser = false
         myOrder = await OrderDocModel .create(req.body)
         req.send({msg:req.body})
 
     }
     else{
         req.send("You dont have sufficient Balance")
     }
 
    }
 }

 module.exports.createOrder = createOrder