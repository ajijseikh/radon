const express = require('express');
const lodash=require('lodash')
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
router.get('/hello', function (req, res) {

    let month=["jan","feb","march","april","may","jun","july","aug","sep","nov","dec"]
  const chunk=lodash.chunk(month,3);
   console.log(chunk);

   const oddNo = [1,2,3,4,5,6,7,8,9,10]
    const tail = lodash.tail(oddNo);
    console.log(tail);

    const arr1 = [1,3,5,6]
    const arr2 = [1,3,8,6]
    const arr3 = [1,3,9,7]
    const arr4 = [1,10,9,7]
    const arr5 = [1,3,9,10]
    const mixarr = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(mixarr);

    const a = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    const b = lodash.fromPairs(a)
    console.log(b);

    res.send('Hello there!')
});



module.exports = router;
// adding this comment for no reason