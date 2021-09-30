const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

//Section to hold the lists =====================================================

let hList = ["beginning the list",]

let lList = []

//All the commands ==============================================================

app.get("/api/hList", (req,res) => {
    res.status(200).send(hList)
})

app.get("/api/lList", (req,res) => {
    res.status(200).send(lList)
})

app.post("/api/hList", (req,res) => {
    console.log(req.body)
    let list = req.body.list
    hList.push(list)
    res.status(200).send(list)
    console.log(hList)
})

app.post("api/lList", (req,res) => {

})


//==============================================================================
const port = 4500

app.listen(port, () => console.log(`You're up and running on ${port}`))