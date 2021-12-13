const app = require('express')()

const morgan = require('morgan') // http request logger middleware

app.use(morgan('tiny'))

// sample log 
// GET / 200 47 - 9.465 ms
// GET /api/items?user=blank 304 - - 9.074 ms

app.get('/', (req, res) => {
    res.send('<h1>hellow world</h1> <a href =/about>About</a>')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/api/items', (req, res) => { // passing multiple middleware
    res.send('Items')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.listen(5000, () => {
    console.log('Server listening at : 5000... ');
})


