const printDate= function(){
    const man = new Date()
    console.log(man);

}
const printMonth = function(){
    const month = new Date("jan","feb","march","april","may","jun") 
    console.log(month.getMonth());

}
const getBatchInfo = function(){
    const kind = new Date()
    console.log ("radon W4D1 the topic for today is Nodejsmodule system");

}
module.exports.printDate=printDate;
module.exports.printMonth=printDate;
module.exports.getBatchInfo=getBatchInfo;
