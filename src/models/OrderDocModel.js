const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId

const OrderDocumentSchema = new mongoose.Schema( {
    user_id : {
         type:objectId,
         ref : "UserDoc"
    },
    product_id : {
        type:objectId,
        ref : "ProductDoc"
   },
   amount: Number,
   isFreeAppUser : Boolean,
    date: String

}, { timestamps: true });

module.exports = mongoose.model("OrderDoc", OrderDocumentSchema)