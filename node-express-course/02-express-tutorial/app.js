const http = require('http')
const { readFileSync } = require('fs')

// get all files 
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    //home page !!
    const url = req.url
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    //about page!!
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About page !!</h1>')
        res.end()
    }
    //404
    else {
        res.writeHead(400, { 'content-type': 'text/html' })
        res.write('<h1>page no found </h1>')
        res.end()
    }

})

server.listen(5000)