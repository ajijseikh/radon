const ProductDocModel = require ("../models/ProductDocModel");

const createProduct= async function (req, res) {
    let data= req.body
    const myProduct = await ProductDocModel.create(data)
    res.send({msg: myProduct})
}


module.exports.createProduct=createProduct