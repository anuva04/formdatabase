const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(userRouter)
app.use(express.static(path.join(__dirname, '../Public')))

app.listen(port, () => {
    console.log('Server is up on '+ port)
})