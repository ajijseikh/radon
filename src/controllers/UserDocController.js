const UserDocModel = require("../models/UserDocModel")

const createUsers= async function (req, res) {
    let data= req.body
    const myUser = await UserDocModel.create(data)
    res.send({msg: myUser});
}

module.exports.createUsers=createUsers