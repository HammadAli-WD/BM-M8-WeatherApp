const router = require("express").Router();
const userRouter = require("./user")
const weatherRouter = require("./weatherData")

router.use("/user", userRouter)
router.use("/data", weatherRouter)
module.exports = router