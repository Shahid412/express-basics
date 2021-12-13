const express = require('express')
const app = express()

let {people} = require('./data')

// static assets and middleware
app.use(express.static('./methods-public'))

// middleware to parse form data
// this is where we handle data on server
app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.get('/api/people', (req,res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/api/people', (req,res) => {
    const {name}= req.body
    if(!name){
        return res
        .status(400)
        .json({success:false,msg:'Please provide Name Value !'})
    }
    res
    .status(201)
    .json({success:true, person:name})
})

app.post('/login', (req, res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials...')
})

app.put('/api/people/:id', (req, res) => {
    const { id }= req.params // 'id' as request parameter 
    const { name }= req.body // 'new name' is also passed with request 
    // console.log(id, name);
    //res.send('Hello world ')
    const person = people.find((person) => person.id===Number(id))

    if (!person){
        return res
        .status(404)
        .json({success:false,msg:`No person with id ${id}`})

    }
    const newPeople= people.map((person)=>{
        if (person.id===Number(id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({success:true, data:newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    // delete a person with 'id' passed as request parameter
    // directly access query param
    const person = people.find((person) => person.id===Number(req.params.id))
    if (!person){
        return res
        .status(404)
        .json({success:false,msg:`No person with id ${req.params.id}`})
    }
    const newPeople = people.filter( 
        (person) => person.id !== Number (req.params.id) 
    )
    res
    .status(200)
    .json( { success:true, data:newPeople } )
})

app.listen(5000, ()=> {
    console.log('Server listening at: 5000... ');
})

