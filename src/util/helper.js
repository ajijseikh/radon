const printDate= function(){
    const man = new Date()
    console.log(man);

}
const printMonth = function(){
    const month = new Date() 
    let kan=[ "jan","feb","march","april","may","jun","july","aus","sep","oct","nov","dec"]
    console.log(kan[month.getMonth()]);

}
const getBatchInfo = function(){
    const kind = new Date()
    console.log ("radon W4D1 the topic for today is Nodejsmodule system");

}
module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;
