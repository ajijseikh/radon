const { get } = require("mongoose");
const authorModel = require("../model/authorModel");
const blogModel = require("../Model/blogModel");
const mongoose = require("mongoose")

const varify=function(ObjectId){
  return mongoose.Types.ObjectId.isValid(ObjectId)
}

///*** create blog */

const createBlog = async function (req, res) {
  try {
    let authorId = req.body.authorId;
    let blogData = req.body;
    if(!blogData.title) return res.status(404).send({msg:"Add the title in body"})
    if(!blogData.body) return res.status(404).send({msg:"Add the body in body section"})
    if(!authorId) return res.status(404).send({msg:"Add the authorId in body"})
    if(!blogData.category) return res.status(404).send({msg:"Add the blog category in body"})
    if(!varify(authorId)){return res.status(404).send("authorId is not valid")}
    let authorIdfind = await authorModel.findById(authorId);
    if (!authorIdfind) res.status(404).send({ msg: "author is not exist" });
    let blogcreate = await blogModel.create(blogData);
    res.status(201).send({ msr: blogcreate });
  } catch (err) {
    res.status(500).send({ err: err });
  }
};

///*** get blog */

const getBlogs = async function (req, res) {
    try {
        let data=req.query
        console.log(data)
        if(!data) return res.status(400).send({status:false, msg:"No data find"})
        let query={isDeleted:false, isPublished:true}
        if (data.authorId) {if(data.authorId){if(!varify(data.authorId)){return res.status(404).send("authorId is not valid")}else{query.authorId = data.authorId;} }}
        
        if (data.tags) query.tags = { $in: data.tags };
        if (data.category) query.category = data.category ;
        let getdata = await blogModel.find(query);
        
        if (Object.keys(getdata).length>0) { res.status(200).send({ status: true, msg: getdata});
    } else {
            res.status(404).send("data not found");
          }
  } catch (err) {
    res.status(500).send({ err: err });
  }
};

///******update blog *****/

const updateBlogs=async function(req,res){
  try{
const data=req.params
let{title,subcategory,tags,body}=req.body


if(!data.blogId){
  return res.status(400).send({status:false,msg:"plz enter blogId"}) 

}
if(!mongoose.isValidObjectId(data.blogId)){
  return res.status(400).send({status:false,msg:"please give valid blogId properly" })
}
if(!title|| title===undefined){
  return res.status(400).send({status:false,msg:"title val must be present" }) 
}

if(title.trim().length===0 )

return res.status(400).send({status:false,msg:"title val must be present" })

const updateBlog=await blogModel.findByIdAndUpdate(data.blogId,{$set:{title,subcategory,tags,body,isPublished:true,publishedAt:new Date()}},{new:true})
res.status(200).send({status:true,data:updateBlog})

    }catch(err){
        res.status(500).send({status:false,msg:err.message})
}
}

/////deleted by Id blog////
var isValidObjectId = require('mongoose-id-validator')

const deleteById=async function(req,res){
  try{
      const data=req.params

  
if(!mongoose.isValidObjectId(data.blogId)){
  return res.status(400).send({status:false,msg:"please give valid blogId " })
}
const deleteblog=await blogModel.findOneAndUpdate({_id:data.blogId,isDeleted:false},{$set:{isDeleted:true,isPublished:false}},{new:true})

        res.status(200).send({status:true,data:deleteblog})
        

    }catch(err){
        res.status(500).send({status:false,msg:err.message})

    }
}


  

////*** deleted by Query blog */
const deleteByQuery = async function (req, res) {
  try {
    let data = req.query;
    if(!data) return res.send({status:false, msg:"No data find"})
    if (Object.keys(data).length == 0) { return res.status(404).send({ status: false, msg: "Please add some query" })}
    
    // let query = {};
    // if (data.authorId) query.authorId = data.authorId;
    // if (data.tags) query.tags = { $in: data.tags };
    // if (data.subcategory) query.subcategory = { $in: data.subcategory }
    let deletedData = await blogModel.updateOne(data, {$set: { isDeleted: true },});
    
    res.send({ status: true, msg: deletedData });
  } catch (err) {
    res.status(500).send({ err: err });
  }
};


module.exports.createBlog = createBlog;
module.exports.getBlogs = getBlogs;
module.exports.updateBlogs = updateBlogs;
module.exports.deleteById = deleteById;
module.exports.deleteByQuery = deleteByQuery;
