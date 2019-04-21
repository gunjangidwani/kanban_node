const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./route/route')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(router)

mongoose.connect('mongodb+srv://dbGunjan:030893*g@cluster0-zjnx9.mongodb.net/formcept_assignment_kanban_db?retryWrites=true');

// mongoose.connect('mongodb://localhost:27017/formcept_assign')



app.listen(3000, () => {
    console.log("Node Server started at 3000")
})