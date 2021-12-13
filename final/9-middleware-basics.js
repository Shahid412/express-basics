const app = require('express')()

// req => middleware => res

// logger middleware

// const logger = () => { // error - req is not defined 
// const logger = (req, res) => { // no error - but activates waiting cursor until either you write a response or pass next() function
// const method= req.method
// const url = req.url
// const year = new Date().getFullYear()
// console.log(method, url, year);
// }

// always always terminate either by sending your own response or by calling next () middleware

// const logger = (req, res, next) => { // ok -- send response
//     const method= req.method
//     const url = req.url
//     const year = new Date().getFullYear()
//     console.log(method, url, year);
//     res.send('Testing') // this response terminates the middleware (or send 'next();' as below)
// }

const logger = (req, res, next) => { // ok - call next ();
    const method= req.method
    const url = req.url
    const year = new Date().getFullYear()
    console.log(method, url, year);
    next() // -- notice : next ()
}

app.get('/', logger, (req, res) => { // notice : logger middleware
    // just a simple log for which logger() is created 
    // const method= req.method
    // const url = req.url
    // const year = new Date().getFullYear()
    // console.log(method, url, year);
    res.send('<h1>hellow world</h1> <a href =/about>About</a>')
})
