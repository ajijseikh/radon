const mongoose = require('mongoose');

const NewAuthorSchema = new mongoose.Schema( {
  
    Author_Name: String,
    Age:Number,
    Address:String,
    Rating:String

}, { timestamps: true });

module.exports = mongoose.model('NewAuthor', NewAuthorSchema)
