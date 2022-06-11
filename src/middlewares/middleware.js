
const Everytime= function (req, res, next) {
   
    console.log("this is time and date")
    next()
}
const midd2=function (req, res, next){
    console.log("this is 2nd midd2")
    next()
}
const midd3=function (req, res, next){
    console.log("this is 3rd midd")
    next()
}

module.exports.midd2=midd2
module.exports.midd3=midd3
module.exports.Everytime= Everytime