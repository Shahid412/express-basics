const http = require('http')

const {readFileSync}= require('fs')

//get all files 
const Homepage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    //console.log(req) // complete req object 
    console.log(req.method) // log request method only 
    console.log(req.url) // log request url only - whatever you type in url bar is logged
    const url=req.url
    // home page
    if (url==='/'){
        res.writeHead(200,{'content-type':'text/html'}) // MIME type 'text/plain' interprets it as simple text not html
        //res.write('<h1>Home page!!!</h1>')
        res.write(Homepage)
        res.end()
    // about page
    }else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'}) // MIME type 'text/plain' interprets it as simple text not html
        res.write('<h1>About page!!!</h1>')
        res.end()
    // contact page
    }else if(url=== '/contact'){
        res.writeHead(200,{'content-type':'text/html'}) // MIME type 'text/plain' interprets it as simple text not html
        res.write('<h1>Contact page!!!</h1>')
        res.end()
    // error page
    }else { // any other than above is not found e.g. /google, /error etc
        res.writeHead(404,{'content-type':'text/html'}) // MIME type 'text/plain' interprets it as simple text not html
        res.write('<h1>Page not found ...!!!</h1>')
        res.end()    
    }
    console.log('User hit the server')
})

server.listen(5000, () => {
    console.log('Server listening... ')
})
