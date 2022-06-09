// const  mongoose  = require("mongoose")
// const authorModel = require("../models/NewAutherModel")
// const bookModel= require("../models/NewBookModel")
const PunlisherModel= require("../models/NewPublisherModel")

const CreatePunlisher= async function (req, res) {
    let Author = req.body
    let CreatedPunlisher = await PunlisherModel.create(Author)
    res.send({data: CreatedPunlisher})
}
module.exports.CreatePunlisher=CreatePunlisher