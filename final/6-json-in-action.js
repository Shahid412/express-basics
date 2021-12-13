const express= require("express")
const app = express()

const { products } = require('./data')
const { people } = require('./data')

app.get('/',(req, res)=>{
    res.end(
        '<h1>Home page</h1><br><a href="/api/products">all products</a><br><br><a href="/api/mapped-products">mapped products</a> (selected data of each product)<br><br>')
        // define url '/api/products' in below
        // define url '/api/mapped-products' in below
        // define url '/api/products/1' in below
})

// /api/products
app.get('/api/products', (req, res)=>{
    res.json(products)
})

// /api/mapped-products
app.get('/api/mapped-products', (req, res) => {
    const newPorducts = products.map((product)=>{
        const { order, title, dates } = product
        return { order, title, dates }
    })
    res.json( newPorducts )
})

app.listen(5000, () => {
    console.log('Server listening at: 5000... ');
})
