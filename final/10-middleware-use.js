const app = require('express')()

// logger middleware
const logger = require('./logger')

app.get('/', logger, (req, res) => { // notice : logger middleware
    // just a simple log for which logger() is created 
    res.send('<h1>hellow world</h1> <a href =/about>About</a>')
})

// can also add middleware in all routes

app.get('/about', logger, (req, res) => {
        res.send('About page')
})

app.get('/api/items', logger, (req, res) => {
    res.send('Items')
})

app.get('/api/products', logger, (req, res) => {
    res.send('Products')
})

// middleware logger usage -- logged on console

// GET / 2021
// GET /api/products/ 2021
// GET /api/items/ 2021

app.listen(5000, () => {
    console.log('Server listening at : 5000... ');
})

