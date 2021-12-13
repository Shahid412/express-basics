const express = require('express')
const app = express()

// router with controllers
// const people = require('./routes-with-controllers/people')

// router without controllers
const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets and middleware
app.use(express.static('./methods-public'))

// middleware to parse form data
// this is where we handle data on server
app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/api/people', people) // use people only with paths /api/people
app.use('/login', auth)

app.listen(5000, ()=> {
    console.log('Server listening at: 5000... ');
})
