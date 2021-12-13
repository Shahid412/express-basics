const express= require('express')
const router = express.Router()

let {people} = require('../data')

// base path already set in app.js, so just forward slash is need here 
router.get('/', (req,res) => {
    res.status(200).json({success:true,data:people})
})

router.post('/', (req,res) => {
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

router.post('/postman', (req,res) => {
    const {name}= req.body
    if(!name){
        return res
        .status(400)
        .json({success:false,msg:'Please provide Name Value !'})
    }
    res
    .status(201)
    .json({success:true, data:[...people, name]})
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports = router 
