const express=require('express')
const router= express.Router()
const authorController=require('../controller/authorController')
const blogController = require('../controller/blogController')
const auth = require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/authors',authorController.createAuthor)
router.post('/blogs', auth.authenticate, blogController.createBlog)
router.get('/getBlogs',auth.authenticate, blogController.getBlogs)
router.put('/blogs/:blogId', auth.authenticate,auth.authorise, blogController.updateBlogs)
router.delete('/deleteBlogs/:blogId',auth.authenticate, blogController.deleteById)
router.delete('/deleteByQuery',auth.authenticate ,auth.delByQeury, blogController.deleteByQuery)
router.post('/login', authorController.loginAuthor)
router.get('/getBlogsByAuthentication',auth.authenticate, blogController.getBlogs)


router.patch("/getBlog",async function(req,res){
    await blogModel.updateMany({},{isDeleted:false,deletedAt:null,isPublished:true}.count())
    res.send("complete")
})

module.exports=router
