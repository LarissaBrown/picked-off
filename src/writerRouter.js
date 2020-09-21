const express = require ("express")
const writerRouter = express.Router()
const {v4} = require("uuid")

const writers = [
    { firstName: "Suzie", lastName: "Jones", title: "The Goonies", writingProcess: "PreWriting", sevenTraits: "ideas", _id:v4()},
    { firstName: "John", lastName: "Smith" , title: "Wonderful", writingProcess: "FirstDraft", sevenTraits: "Voice", _id:v4()},
    { firstName: "Amy" , lastName: " Woods" , title: "Growing Old", writingProcess: "Publish", sevenTraits: "Word Choice", _id:v4()}
]


writerRouter.get("/", (req, res, next) => {
    res.send(writers)
    next()
   
    
})

module.exports = writerRouter