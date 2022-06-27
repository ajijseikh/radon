const authorModel=require("../model/authorModel")
const jwt = require("jsonwebtoken");

const createAuthor=async function (req,res){
try{
    let authordata=req.body
    let{fname,lname,title,email,password}=authordata

    if(!authordata.fname){
        res.status(404).send("please fill the firstName")
       
    }
    if(!authordata.lname){
       return res.status(404).send("please fill the LastName")
    }
    if(!authordata.title){
        return res.status(404).send("please fill the title")
    }
    if(["Mr", "Mrs", "Miss"].indexOf(authordata.title)==-1){
        return res.status(404).send({err:"Please select title from these: Mr/Mrs/Miss "})
        }
    if(!authordata.email){
        return res.status(404).send("please fill the email")
    }
    if(!authordata.password){
        return res.status(404).send("please fill the password")
    }
    if(!fname.trim()|| !lname.trim() || !title.trim() || !email.trim() || !password.trim()){
        return res.status(400).send({status:false,msg:"please dont give space " })
    }

    let usedEmail = await authorModel.find({email:authordata.email})
    if(Object.keys(usedEmail).length>0){
         return res.status(409).send({err:"this email id is already used."})
         // 409:The request could not be completed due to a conflict with the current state of the resource. This code is only allowed in situations where it is expected
      }else { 
        let author=await authorModel.create(authordata)
    res.status(201).send({msg:author})
      }
}catch(err){
    res.status(500).send({"err":err})
    //500: Internal Server Error
}
}

const loginAuthor = async function (req, res) {

    try{
    let userName = req.body.email;
    if(!userName) return res.status(404).send("Please provide valid email")
    let password = req.body.password;
    if(!password) return res.status(404).send("Please provide password")
    if(userName && password){
    let user = await authorModel.findOne({ email: userName, password: password });
    if (!user) return res.status(404).send({ status: false, msg: "Email or the password is not corerct", });
  
    let token = jwt.sign(
      {
        authorId: user._id.toString(),
        batch: "radon",
        organisation: "FunctionUp",
      },
      "projectone"
    );
    res.setHeader("x-api-key", token);
    res.status(200).send({ status: true, token: token , authorId:user._id});
    } 
    else res.status(401).send({ msg: "Email and password are required"})
   
  } 
  catch(err){
      console.log("This is the error :", err.message)
      xyz.status(500).send({ msg: "Error", error: err.message })
  }
  }




module.exports.loginAuthor=loginAuthor
module.exports.createAuthor=createAuthor
