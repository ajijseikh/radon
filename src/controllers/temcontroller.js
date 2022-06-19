const axios =require("axios")

const getWeather = async function(req,res){
    try {
        //  let q = req.query.q
        // let appid = req.query.appid
        let option = {
            method: 'get',
            url : `http://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=7deca494a71d2d895a58a1e387894b11`
        }
        let result = await axios(option)
        let data = result.data
        res.status(200).send({msg:data})
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
const getSorted =async function(req,res){
    try{
        let cities = [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let sortedCity = []
        for(i = 0;i< cities.length;i++){
            let obj = {city:cities[i]}
            
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=7deca494a71d2d895a58a1e387894b11`)
            obj.temp = resp.data.main.temp
            sortedCity.push(obj)
        }
        let sorted = sortedCity.sort(function(a,b){return a.temp - b.temp})
        res.status(200).send({data:sorted})
    }
    catch (err){
        res.status(500).send(err.message)
    }
}
//problem statement 3


const memePost = async function(req,res){
    try{
    let {template_id, text0,text1,username,password} = req.query
    
    let option = {
        method : 'post',
        url :`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result = await axios(option)
    let data = result.data
    res.status(200).send({msg:data})
}
catch(err){
    res.status(500).send(err.message)
}
}



module.exports.getSorted = getSorted
module.exports.getWeather = getWeather
module.exports.memePost = memePost