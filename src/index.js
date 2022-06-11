const express = require('express');
const bodyParser = require('body-parser');
const moment=require("moment");
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://ajij:7pt2AejwcFh1o56K@cluster0.dwd5pcx.mongodb.net/RADON-DB?retryWrites=true&w=majority",{
// mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


   const assignmentmidware= function (req, res, next){
    const Dates=moment().format('MMMM Do YYYY, h:mm:ss a');
    const ip=req.ip;
    const UrlPath=req.path;
    console.log(`${Dates} ${ip} ${UrlPath}`)
    
    next()

    }
    app.use(assignmentmidware)

app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
