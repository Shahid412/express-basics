const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
// express.static is asset/file which the server does not have to change 
// thus, instead of creating separate/individual path for every such file (as in http example),
// just place all such assets/files in a single folder (e.g. /public), and use it 
// for example, if have to access 20000 images, simply place it in a common folder (e.g. /public) and express will tale care of all that 
// i.e. express with setup the path, setup the mind tabs, setup the status code and all that 
// so we are now secured from defining all the files' paths individually as we in http app 

// setup static and middleware
app.use(express.static('./public'))

// commenting this app.get and copying index.html in /public throws mind grenade 
app.get('/', (req,res) => { // provide a path (absolute path which is resolved) for a file to be send as a response (index.html) to request
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.listen(5000, ()=> {
    console.log('Server listening at port: 5000... ')
})

