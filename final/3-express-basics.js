const { response } = require('express');
const express= require('express')
const app = express()

// get() is performed by all browsers by default
app.get('/', (req, res)=>{ // get() method with a path(the resource which s/he is trying to access) and a callback 
    // this callback is invoked every time user is performing get request on our route/domain
    console.log('User hit the resource');
    //res.send('Home page')// or pass the status code as well
    res.status(200).send('Home page') // status code 200 is OK
})

app.get('/about', (req, res)=>{ // get() method with a path(the resource which s/he is trying to access) and a callback 
    // this callback is invoked every time user is performing get request on our route/domain
    console.log('User hit the about');
    //res.send('About page')// or the following
    res.status(200).send('About page')
})

// for 'all' the response (all whatever the resource user accesses)
app.all('*', (req, res)=>{ // all() method with a path(the resource which s/he is trying to access) and a callback 
    // this callback is invoked every time user is performing get request on our route/domain
    console.log('User hit resource not found');
    //res.send('<h1>resource not found</h1>') // or 
    res.status(404).send('<h1>resource not found</h1>') // pass the status code as well
    // can also pass the status code 
})

app.listen(5000, ()=> {
    console.log('Server listening ... ')
})

// app is an object with bunch of useful methods
// first four are similar to http methods
// app.get    - Read data (all browsers perform get request by defualt )
// app.post   - Insert data
// app.put    - Update data
// app.delete - Delete/Remove data
// app.all    - works with all of them 
// app.use    - responsible for middleware
// app.listen - listen is also already covered in server.listen() or app.listen()



