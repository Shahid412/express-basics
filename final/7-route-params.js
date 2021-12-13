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

// /api/products/1
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => {product.order === Number(1)})
    const singlePerson = people.find((person) => {person.id===1})
//    res.json(singleProduct)
    console.log(req.params);
    res.json(singlePerson)
})

// route parameter /api/products/:prodID
app.get('/api/products/:prodID', (req, res) => {
    const prodID=req.params
    const singleProd = products.find(
        (prod) => prod.order === Number(prodID)
    )
    if (!singleProd){
        return res.status(404).send("Item Does Not Exist.")
    }
    console.log(req.params);
    return res.json( singleProd );
})

app.listen(5000, () => {
    console.log('Server listening at: 5000... ');
})
