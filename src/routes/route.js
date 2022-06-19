const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const temcontroller=require("../controllers/temcontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
 
router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getByDistrict", CowinController.getByDist)

router.get("/getTem",temcontroller.getSorted)

router.get("/getweather",temcontroller.getWeather)

router.post("/memePost",temcontroller.memePost)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;