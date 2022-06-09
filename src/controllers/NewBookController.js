const authorModel = require("../models/NewAutherModel")
const bookModel= require("../models/NewBookModel")
const publisherModel=require("../models/NewPublisherModel")
// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

const createBook= async function (req, res) {
    let book = req.body
    let Author_Id= book.Author
    if(!Author_Id) return res.send({msg:"Author_Id is madatory"})
    if(Author_Id !=AutherModel_id) return res.send({msg:"Enter Correct Auther_Id"})
    let Publisher_Id=book.Publisher
    if(!Publisher_Id) return res.send({msg:"Publisher_Id is mandatary"})
    if(Publisher_Id !=PublisherModel_Id) return res.send({msg:"Enter the Correct Publisher_Id"})
    let BookCreated=await bookModel.create(book)
    res.send({data:BookCreated})


}


const updatePenguin = async function(req,res){
    let data= await publisherModel.find({name:{$in:["penguin",]}}).select({_id:1})
    let arr = data.map((obj)=>obj._id.toString())
    let book = await bookModel.findOneAndUpdate({publisher:{$in:arr}},{$set:{"HardCover":true}})
    res.send({msg:book})

}
const updatePrice = async function(req,res) {
    let authId = await authorModel.find({rating:{$gt: 3.5}}).select({_id:1})
    let arr = authId.map((obj)=>obj._id.toString())
    let newBook = await bookModel.findOneAndUpdate({author_id:{$in:arr}},{$inc:{"price":+10}})
    res.send({msg:newBook})
}




module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatePenguin=updatePenguin
module.exports.updatePrice=updatePrice