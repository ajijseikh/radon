const express = require('express');
const router = express.Router();

const authorController= require("../controllers/NewAuthorController")
const bookController= require("../controllers/NewBookController")
const PublisherController=require("../controllers/NewPublisherController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/CreateAuthor", authorController.CreateAuthor  )

// router.get("/getAuthorsData", authorController.GetAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/CreatePunlisher",PublisherController.CreatePunlisher)

router.get("/updatePenguin",bookController.updatePenguin)
router.get("/updatePrice",bookController.updatePrice)

module.exports = router;