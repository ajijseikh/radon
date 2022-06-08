const {count}= require("console")
const authorModel=require("../models/authorModel")
const bookModel = require("../models/bookModel")
// const booksModel= require("../models/bookModel")




const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})

}

const authorBook= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}


const getCBBooks= async function(req,res){
    let id = await authorModel.find({author_name : "Chetan Bhagat"}).select({author_id : 1})
    let book = await bookModel.find({author_id : id[0].author_id})
    res.send({msg:book})
}



const getBookData= async function (req, res){
    let saveData= await bookModel.findOneAndUpdate({bookName:"Two states"},{$set: {price:100}},{new :true})
    let authorData=await authorModel.find({authorId: saveData.authorId})
    let price= saveData.price
    res.send({msg: authorData, price}) 
}
const respondBack = async function(req, res){
    let bookRange = await bookModel.find({price:{$gte:50, $lte:100}})
    let arr=[]
    for(let i=0;i<bookRange.length;i++){
        let id=bookRange[i].author_id
        let dataList = await authorModel.findOne({author_id:id})
        let authorname=dataList.author_name
        let bookname=bookRange[i].bookName
        let rate=bookRange[i].price
        let obj={Name:authorname,Book:bookname,RS:rate}
        arr.push(obj)
    }
    return res.send({Data:arr}) 

}
//new


module.exports.createBook=createBook
module.exports.getBookData=getBookData
module.exports.respondBack=respondBack
module.exports.authorBook=authorBook

module.exports.getCBBooks=getCBBooks


























// const getUsersData= async function (req, res) {
//     let allUsers= await booksModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUsers= createUsers
// module.exports.getUsersData= getUsersData