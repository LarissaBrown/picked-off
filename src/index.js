const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/writers", require("./writerRouter.js"))

app.use("/writers", (req, res, next) => {
    console.log("the items middleware was executed")
    next()
})

app.listen(8000, ()=> {
    console.log("The server is running on Port 8000")
})