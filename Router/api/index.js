const express = require("express")
const router = express.Router()
const authRoutes = require("./authentication")

router.use("/authentication" , authRoutes)


module.exports = router