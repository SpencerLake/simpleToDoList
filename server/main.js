const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

let hList = []

let lList = []

app.get("/api/hList", (req,res) => {
    res.status(200).send(hList)
})

app.get("/api/lList", (req,res) => {
    res.status(200).send(lList)
})