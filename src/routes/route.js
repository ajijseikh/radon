const express = require('express');
const ajij  = require('../logger/logger');
const ajij2 =require('../util/helper');
const ajij3 =require('../validator/formatter');
const router = express.Router();

router.get('/test-me', function (req, res) {
   ajij.welcome()
   ajij2.printDate()
   ajij2.printMonth()
   ajij2.getBatchInfo()
   console.log(ajij3.man1)
   console.log(ajij3.man2)
   console.log(ajij3.man3)




    res.send('My first ever api!')
});




module.exports = router;
// adding this comment for no reason