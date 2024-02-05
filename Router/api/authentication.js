const express = require("express")
const router = express.Router()

router.get( "/registration" , (req ,res) => {
    res.json("this is from Home")
})
router.get ("/varify" , (req ,res) => {
    res.json ("this is Varify")
})


module.exports = router