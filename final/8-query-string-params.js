const express = require('express')
const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
    console.log('homepage');
    res.send('Homepage')
})

// query string parameters
// http://localhost:5000/api/v1/query?name=blank&id=4
// http://localhost:5000/api/v1/query?search=a&limit=3

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products]

    // http://localhost:5000/api/v1/query?limit=2&search=Full
    // search the items with starting name/characters
    if (search){
        sortedProducts=sortedProducts.filter((pr) => {
            return pr.title.startsWith(search)
        })
    }
    // set the limit for number of items displayed
    if (limit){
        sortedProducts=sortedProducts.slice(0, Number(limit))
    }
    // check the length of items array returned
    if (sortedProducts.length<1){
        //res.status(200).send('No items match your search... ')
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).send(sortedProducts)
    
    //res.send('Hello world!')

})

app.listen(5000, () => {
    console.log('Server listening at: 5000... ');
})

