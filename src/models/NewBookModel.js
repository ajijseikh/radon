const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    Name: String,
    Author_Id: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    Price: Number,
    Rating:String,
    Publisher_Id:{
        type:ObjectId,
        ref:"NewPublisher"
    },
   HardCover:{
    type:Boolean,
    default:false
 }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
