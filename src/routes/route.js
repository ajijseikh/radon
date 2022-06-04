const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { sendStatus } = require('express/lib/response');

const router = express.Router();


router.get('/movies',function(req,res){
const movies=["pk","range de basanti","the shining","chak de india","lord of the rings","puspa","badman begins"]
console.log(movies)
res.send(movies);

})
router.get('/movies/:indexNumber',function(req,res){
const movies=["range de basanti","the shining","lord of the rings","badman begins"]
console.log(movies[req.params.indexNumber])
if (req.params>movies.length-1)(
    console.log("use a valid index"))
res.send(movies[req.params.indexNumber])
})

router.get('/films',function(req,res){

const arr=[
    {
        "id":1,
        "name":"the shining"
    },
    {
        "id":2,
        "name":"incendie"
    },
    {
        "id":3,
        "name":"rang de basanti"
    },
    {
        "id":4,
        "name":"finding nemo"
    }
]
console.log(arr)
res.sendStatus(arr)
})

router.get('/films/:filmId', function(req,res){
   const newfilms=[{
       "id":1,
       "name":"the shining"
},
{
    "id":2,
    "name":"incendies"
},
{
    "id":3,
    "name":"rang de basanti"
},
{
    "id":4,
    "name":"finding nemo"
}] 
console.log(newfilms[req.params.filmId])
if(req.params>newfilms.length-1)(
    console.log("no movie exists with this id"))
    res.send(new[res.params.filmId])
})


router.get('/solution-1', function(req, res){
    let arr= [1,2,3,5,6,7]
    let total=0;
    for (var i in arr){
        total=total + arr[i];
}
   let lastDigit=arr.pop()
   let consecutiveSum= lastDigit * (lastDigit=1)/2
   let missingNumber=consecutiveSum-total
   res.send({data:missingNumber});
})
router.get("/sol2",function (req,res){
    let arr=[33,34,35,37,38]
    let len= arr.length
    let total =0;
    for (var i in arr){
        total +=arr[i];
    }
    let firstDigit=arr[0]
    let lastDigit=arr.pop()

    let consecutiveSum=(len + 1) * (firstDigit + lastDigit)/2
    let missingNumber=consecutiveSum-total

    res.send({data: missingNumber});
})
 




























































// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// });

// router.get('/candidates/:canidatesNames', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')


// router.get('/Get/movies',function (req, res){

//     let movies=["Rang de basanti","The shining","Lord of the rings","batmant begins"]
//   res.send(movies)
// })

// router.get('/movies', function(req, res){
//     const movies= ["rang de basanti","the shining"," lord of the rings","badman begins","pk", "jai ho","chak de India","puspa"];
//     console.log(movies)
//     res.send(movies);
  
  
//     router.get('/movies/:indexNumber', function(req,res){
//         const movieindex= ["rang de basanti","the shining"," lord of the rings","badman begins"];
  
//         console.log(movieindex);
//         res.send(movieindex)
  
  
  
//     })
  
//   })
  
//   router.get('/test-me', function (req, res) {
//       myHelper.printDate()
//       myHelper.getCurrentMonth()
//       myHelper.getCohortData()
//       let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//       console.log('The first element received from underscope function is '+firstElement)
//       res.send('My first ever api!')
//   });
  


module.exports = router;
// adding this comment for no reason