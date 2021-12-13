const app = require('express')()

const logger = require('./logger')
const authorize = require('./authorize')

app.use([logger, authorize])

// console log -- executed in order (logger is first, authorize is next)
// when authorize() is simply logging
// GET / 2021
// authorize
// GET /about 2021
// authorize
// GET /api/items 2021
// authorize
// GET /products 2021
// authorize

app.get('/', (req, res) => {
    res.send('<h1>hellow world</h1> <a href =/about>About</a>')
})
// localhost:5000 -- unauthorized
// same is true for other routes if user is not mentioned in query string
// localhost:5000/?user=blank -- ok
// localhost:5000/api/items?user=blank -- ok

// sample log 
// GET / 2021
// GET /?user=blank 2021
// GET /api/items?user=blank 2021

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/api/items', [logger, authorize], (req, res) => { // passing multiple middleware
    console.log(req.user)
    res.send('Items')
})
// sample log for above
// GET /api/items?user=blank 2021
// { name: 'blank', id: 3 }
// notice req.user is logger here
// but not similar is logger for any other route e.g / or /about 

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.listen(5000, () => {
    console.log('Server listening at : 5000... ');
})


