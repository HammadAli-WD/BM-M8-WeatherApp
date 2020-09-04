require("dotenv").config();
const express = require("express");
const app = new express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app)
const DB = require("./config/db")
const services = require("./services")
const passport = require("./utils/oauth")

app.use((error, req, res, next) => {
    res.status (error.httpStatusCode)
    res.send('Error')
})
  

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", services)

if(process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"))
} else {
    app.use(helmet())
}

server.listen(process.env.PORT)
server.on("listening", ()=> {
    DB()
})

server.on("error", (err) =>console.log(err))