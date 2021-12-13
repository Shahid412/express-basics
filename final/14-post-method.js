const express = require('express')
const app = express()

let {people} = require('./data')

// static assets and middleware
app.use(express.static('./methods-public'))

// middleware to parse form data
// this is where we handle data on server
app.use(express.urlencoded({extended:false}))

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true,people})
})

app.post('/login', (req, res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials...')
})

app.listen(5000, ()=> {
    console.log('Server listening at: 5000... ');
})

