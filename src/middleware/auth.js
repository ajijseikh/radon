// const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token

    // next()
// }


// const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    // next()
// }


const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//In this we check token is present or not / check token is verified or not / and also check authorization
const authenticate = async function (req, res, next) {
  let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];

  if (!token) res.send({ status: false, msg: "Token must be present" });

  const decodedToken = jwt.verify(token,"functionup-thorium")
    if (!decodedToken) return res.send({status : false , msg:"token is not valid"});

    next();
}

const authorise = function(req, res, next) {
    let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];
    const decodedToken = jwt.verify(token,"functionup-thorium")
    let userToBeModified = req.params.userId
   
    let userLoggedIn = decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next();


}

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;