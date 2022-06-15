const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth =require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login",auth.auth, userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.auth, userController.getUserData)
router.post("/users/:userId/posts",auth.auth, userController.postMessage)

router.put("/users/:userId",auth.auth, userController.updateUser)
router.delete('/users/:userId',auth.auth, userController.deleteUser)

module.exports = router;