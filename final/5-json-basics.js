const express= require("express")
const app = express()

const names= [
    {id:1}, 
    {name:'blank' }, 
    {name:'great'}, 
    {message:'you are great'},
    {address:'Lahore'}
]

app.get('/',(req, res)=>(
    res.json([
        {id:1}, 
        {name:'blank' }, 
        {address:'Pak'}, 
        {name:'great' }, 
    ])
))

app.get('/names',(req, res)=>(
    res.json(names)
))

app.listen(5000,()=> {
    console.log('Server listening at: 5000... ');
})
