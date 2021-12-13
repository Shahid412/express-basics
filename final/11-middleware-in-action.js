const app = require('express')()

const logger = require('./logger')

app.use(logger) // includes logger middleware in all routes instead of manually adding in all routes
// must be at the top of all routes in order to be included in all routes -- order matters
// alternatively, can also mention 
// app.use('/api',logger) // will include in all /api/... route

// app.use([path,] callback[, callback])

app.get('/', (req, res) => {
    res.send('<h1>hellow world</h1> <a href =/about>About</a>')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

// middleware logger in action 

// GET / 2021
// GET /api/products/ 2021
// GET /api/items/ 2021

app.listen(5000, () => {
    console.log('Server listening at : 5000... ');
})

