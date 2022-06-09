const AuthorModel= require("../models/NewAutherModel")

const CreateAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const GetAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.CreateAuthor= CreateAuthor
module.exports.GetAuthorsData= GetAuthorsData