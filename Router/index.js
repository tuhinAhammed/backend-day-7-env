const express = require("express")
const router = express.Router()
const apiRouter = require("./api")
// const cors = require('cors')
// router.use(cors())
const api = process.env.BASE_URL ;
// const api = "/auth/v1" 
// console.log(process.env.BASE_URL , "from auth");

router.use(api , apiRouter) 


module.exports = router